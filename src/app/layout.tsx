import type {Metadata} from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import LenisProvider from '@/components/LenisProvider';
import { TransitionProvider } from '@/context/TransitionContext';
import { PageTransition } from '@/components/PageTransition';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'King Ice Cream | Taste of Royalty',
    template: '%s | King Ice Cream',
  },
  description: 'Premium ice cream from Vijaykant Dairy, Belagavi. Pure milk, no palm oil. Cones, Cups, Kulfi, and Family Packs across Karnataka, Goa, Maharashtra & Kerala.',
  keywords: ['King Ice Cream', 'Belagavi', 'premium ice cream', 'Vijaykant Dairy', 'Karnataka ice cream'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${playfair.variable}`}>
      <head>
        {/* Preload key Nohemi font weights for performance */}
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Bold-BF6438cc577b524.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-ExtraBold-BF6438cc5761ae2.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Black-BF6438cc565e67b.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Medium-BF6438cc57ddecd.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans antialiased grain">
        <TransitionProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
          <PageTransition />
        </TransitionProvider>
        <Toaster />
      </body>
    </html>
  );
}
