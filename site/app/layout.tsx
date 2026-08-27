import type { Metadata } from 'next';
import { PrivacyAnalytics } from './components/PrivacyAnalytics';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tcgbusinesselite.com'),
  alternates: { canonical: '/' },
  title: 'TCG Business Elite | Collection Value Tracker',
  description: 'A documented Dominik Szoboszlai football-card collection with transparent market-value tracking and source confidence.',
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon-32.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192.png?v=2', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [{ url: '/apple-touch-icon.png?v=2', type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'TCG Business Elite',
    description: 'Collection Value Tracker',
    type: 'website',
    images: [{ url: '/og.png', width: 1744, height: 909, alt: 'TCG Business Elite — Collection Value Tracker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCG Business Elite',
    description: 'Collection Value Tracker',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<PrivacyAnalytics /></body></html>;
}
