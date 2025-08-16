import type { DribbbleShot } from '../types';
import { STATIC_DRIBBBLE_SHOTS } from './dribbbleStatic';

// Simple in-build fetch for Dribbble RSS (public). Dribbble username provided by user.
// NOTE: Dribbble RSS feed pattern: https://dribbble.com/<user>/shots.rss
// We'll parse minimal fields via regex & DOMParser fallback (in Node we can do a tiny XML parse manually).

const USER = 'ahalizev';
const FEED_URL = `https://dribbble.com/${USER}/shots.rss`;

let cached: DribbbleShot[] | null = null;

/** Lightweight XML text extraction helper */
function extract(tag: string, xml: string): string[] {
  const regex = new RegExp(`<${tag}>([\s\S]*?)<\/${tag}>`, 'gi');
  const out: string[] = [];
  let m; while ((m = regex.exec(xml))) { out.push(m[1].trim()); }
  return out;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim();
}

function firstImage(html: string): string | null {
  const m = html.match(/<img[^>]+src=["']([^"'>]+)["']/i);
  return m ? m[1] : null;
}

export async function getDribbbleShots(limit = 12): Promise<DribbbleShot[]> {
  if (cached) return cached.slice(0, limit);
  try {
    let res = await fetch(FEED_URL, { headers: { 'Accept': 'application/rss+xml, application/xml', 'User-Agent': 'PortfolioSiteBot/1.0 (+https://github.com/akhalizev)' } });
    if (!res.ok) {
      // Try alternate format (append ?format=xml though Dribbble may ignore)
      res = await fetch(FEED_URL + '?ref=alt', { headers: { 'Accept': 'application/rss+xml, application/xml', 'User-Agent': 'PortfolioSiteBot/1.0' } });
    }
    if (!res.ok) throw new Error('Bad status ' + res.status);
    const xml = await res.text();
    // naive split by <item>
    const items = xml.split(/<item>/).slice(1).map(i => i.split(/<\/item>/)[0]);
    const shots: DribbbleShot[] = items.map(raw => {
      const title = (raw.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/<!\[CDATA\[(.*?)]]>/, '$1').trim();
      const link = raw.match(/<link>([\s\S]*?)<\/link>/i)?.[1].trim() || '';
      const pub = raw.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)?.[1].trim() || '';
      const descRaw = raw.match(/<description>([\s\S]*?)<\/description>/i)?.[1] || '';
      const desc = descRaw.replace(/<!\[CDATA\[(.*?)]]>/, '$1');
      const img = firstImage(desc) || '';
      return {
        id: link.split('/').pop() || link,
        title: stripHtml(title),
        url: link,
        image: img,
        published: new Date(pub).toISOString()
      } as DribbbleShot;
    }).filter(s => s.image && s.url);
    cached = shots;
    return shots.slice(0, limit);
  } catch (e) {
    // Fallback: empty array
  // Use static fallback if network/parse failed
  cached = STATIC_DRIBBBLE_SHOTS;
  return STATIC_DRIBBBLE_SHOTS.slice(0, limit);
  }
}
