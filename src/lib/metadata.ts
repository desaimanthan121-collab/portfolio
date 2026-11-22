import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Manthan Desai | AI Product Builder',
    template: '%s | Manthan Desai',
  },
  description:
    'Manthan Desai is an independent AI Product Builder who turns ideas into working digital products using AI-assisted development, creative problem solving and technical judgment.',
  keywords: [
    'Manthan Desai',
    'AI Product Builder',
    'AI-Assisted Development',
    'Product Development',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Manthan Desai',
    },
  ],
  creator: 'Manthan Desai',
  // TODO: replace with your deployed domain.
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Manthan Desai | AI Product Builder',
    description:
      'AI gives me speed. I bring the judgment. An independent builder turning ideas into working digital products.',
    url: 'https://example.com',
    siteName: 'Manthan Desai Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Manthan Desai | AI Product Builder',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manthan Desai | AI Product Builder',
    description:
      'AI gives me speed. I bring the judgment. An independent builder turning ideas into working digital products.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
