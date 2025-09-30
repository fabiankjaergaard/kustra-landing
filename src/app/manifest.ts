import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kustra - Customer Experience Platform',
    short_name: 'Kustra',
    description: 'Transform customer experiences with data-driven journey mapping. Visualize, analyze, and optimize every touchpoint in your customer\'s journey.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e293b',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'analytics'],
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
  }
}