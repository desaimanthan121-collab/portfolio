// Site identity — replace the TODO placeholders with your own details.

export const site = {
  name: 'Manthan Desai',
  firstName: 'Manthan',
  lastName: 'Desai',
  // TODO: replace with your own handle (used in the navbar wordmark hover).
  handle: 'manthandesai',
  // TODO: replace with your own domain.
  brand: 'manthan.dev',
  // TODO: replace with your real email address.
  email: 'hello@example.com',
  // TODO: replace with your city.
  location: 'Your city',
  // TODO: replace with your IANA timezone, e.g. 'Asia/Kolkata'.
  timeZone: 'UTC',
  timeZoneLabel: 'UTC',
  // TODO: replace with your deployed URL.
  url: 'https://example.com',
  tagline: 'AI gives me speed. I bring the judgment.',
  roles: [
    'AI Product Builder',
    'Architecture',
    'Decisions',
    'Debugging',
    'UX',
    'Testing',
    'Delivery',
  ],
} as const;

export type SocialKey = 'github' | 'linkedin' | 'instagram' | 'source';

// TODO: replace each '#' with your verified profile URL.
export const socials: Record<SocialKey, { label: string; href: string }> = {
  github: { label: 'GitHub', href: '#' },
  linkedin: { label: 'LinkedIn', href: '#' },
  instagram: { label: 'Instagram', href: '#' },
  source: { label: 'Source Code', href: '#' },
};

export const socialList: Array<{ label: string; href: string }> = [
  socials.linkedin,
  socials.instagram,
  socials.github,
  socials.source,
];

export const navLinks = [
  { name: 'Home', href: '/#top', menuOnly: true },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
] as const;
