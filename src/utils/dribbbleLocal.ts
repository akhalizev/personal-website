// Map the local exported dribbble_export.json into DribbbleShot[]
// We rely on Vite/TS JSON import capability via Astro config (strict tsconfig includes all files).
import raw from '../../dribbble_export.json';
import type { DribbbleShot } from '../types';

interface ExportJSON { shots: any[]; }
const data = (raw as unknown as ExportJSON);

export function getLocalDribbbleShots(limit = 60): DribbbleShot[] {
  if (!data?.shots) return [];
  return data.shots.slice(0, limit).map(s => {
    const img = s.images?.normal || s.images?.one_x || s.images?.two_x || s.images?.hidpi || '';
    const animated = typeof img === 'string' && /\.gif/i.test(img);
    return {
      id: String(s.id),
      title: s.title || 'Untitled',
      url: s.html_url || '#',
      image: img,
      published: s.published_at || new Date().toISOString(),
      tags: Array.isArray(s.tags) ? s.tags : [],
      animated
    } satisfies DribbbleShot;
  });
}
