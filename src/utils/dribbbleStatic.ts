// Static fallback Dribbble shots. Replace image URLs with local assets placed under public/images/dribbble/
// or remote thumbnails. Keep array small to avoid bloat.
import type { DribbbleShot } from '../types';

export const STATIC_DRIBBBLE_SHOTS: DribbbleShot[] = [
  {
    id: 'placeholder-1',
    title: 'Sample Product Dashboard Concept',
    url: 'https://dribbble.com/ahalizev',
    image: 'https://placehold.co/800x600/png?text=Shot+1',
    published: new Date().toISOString()
  },
  {
    id: 'placeholder-2',
    title: 'Mobile App UI Exploration',
    url: 'https://dribbble.com/ahalizev',
    image: 'https://placehold.co/800x600/png?text=Shot+2',
    published: new Date().toISOString()
  },
  {
    id: 'placeholder-3',
    title: 'Data Visualization Cards',
    url: 'https://dribbble.com/ahalizev',
    image: 'https://placehold.co/800x600/png?text=Shot+3',
    published: new Date().toISOString()
  }
];
