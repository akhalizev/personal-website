// Central place to manage testimonial content.
// Replace placeholder entries with your real testimonials (update photos in /public/).

export interface Testimonial {
  name: string;
  role: string;         // Job title / relationship (e.g. "Product Manager @ Acme")
  quote: string;        // The testimonial text
  photo: string;        // Path under /public (e.g. '/jane.png')
  companyUrl?: string;  // Optional link to company / LinkedIn
}

// Provide exactly the testimonials you want displayed (3 recommended for layout balance)
// Image convention: place testimonial headshots in /public/images/testimonials/
// Use optimized square PNG or WebP around 256x256.
export const testimonials: Testimonial[] = [
  {
    name: 'McLean Donnelly',
    role: 'Department Chair & Faculty at University of Minnesota (former UX Director at Shopify, Shutterstock, Expedia)',
  quote: "Anatoly has the uncommon practice to fully consider the broader context of his work—user, business, technology, and industry. From this vital perspective, he delves into design with quality, efficiency, and precision. This was perfectly deployed for the HandsOn Twin Cities website redesign: he took the initiative to craft UX/UI design and build an impressive prototype, then iterated from feedback to deliver a new digital experience that boosted volunteerism. Above it all, Anatoly's character and intellect remain his strongest assets—principled and inquisitive, he elevates the collective effort while spreading a contagious sense of purpose.",
    photo: '/images/testimonials/McLean_Donnelly.jpeg'
  },
  {
    name: 'Murray Williams',
  role: 'Leadership Coach and Consultant, Author of “Your Time to Shine in Leadership and Life”. (Former Flagship Target Store Director)',
  quote: 'I found Anatoly to be a courageous person and leader. He worked on my team for just under three years at Target. He started as a food expert and advanced to be part of my leadership team in the Team Leader role, owning all aspects of our food business in a high‑volume, highly visible Target store near corporate HQ. His attitude was refreshing—he is a self‑starter who learned every aspect of the business and earned the credibility to be a key part of our leadership team. I would recommend him to anyone seeking a talented, self‑motivated individual with the highest standards for excellence. If I were still leading teams he would be welcome on any of them and I would trust him with the most challenging roles.',
    photo: '/images/testimonials/Murray_Williams.jpg'
  },
  {
    name: 'Meg Rauth VanWagner',
    role: 'Director of Strategic Initiatives at HandsOn Twin Cities',
  quote: "Anatoly was able to transform our organization's website into a beautiful, functional, and effective tool. Being a client of Anatoly's was ideal—he listened to our challenges and helped us find solutions. I would highly recommend Anatoly and would love working with him again!",
    photo: '/images/testimonials/Meg_Rauth_VanWagner.jpeg'
  },
  
  {
    name: 'Alexis Clausen',
    role: 'Development Operations, Principal Gifts',
  quote: "Anatoly was a pleasure to work with. He completed the project promptly and effectively and communicated timelines clearly. The final result showed he thoroughly understood our brand, audience, and content. His time and talent were an incredible asset and we were able to share the completed project with our audience quickly.",
  photo: '/images/testimonials/Alexis_Clausen.jpeg' // TODO: add this image
  },
  {
    name: 'Diraar Jefferson',
    role: 'Store Director at Target',
  quote: "Anatoly is a passionate and driven individual. His personal story is incredible and my time leading him brought joy to our organization. As a Target leader he drove culture through solid routines and strategic planning, providing great service and loyalty for our guests. I highly recommend Anatoly if you're looking for someone ambitious who knows how to accept challenges by executing and leading through his team.",
  photo: '/images/testimonials/Diraar_Jefferson.jpeg' // TODO: add this image
  },
  {
    name: 'Bilal Shahab',
    role: 'Software Engineer at Hyperdata Computing',
  quote: "I had the pleasure of working with Anatoly, a talented Senior UI/UX Designer with an exceptional eye for visual design and strong UI/UX principles. He values developer feedback, adapting designs for better functionality and feasibility. Creative, collaborative, and professional.",
  photo: '/images/testimonials/Bilal_Shahab.jpeg' // TODO: add this image
  }
];
