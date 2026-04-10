import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import LenisProvider from '@/components/LenisProvider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'King Ice Cream | Royalty in Every Scoop',
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Preload key Nohemi font weights for performance */}
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Bold-BF6438cc577b524.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-ExtraBold-BF6438cc5761ae2.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Black-BF6438cc565e67b.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Medium-BF6438cc57ddecd.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans antialiased grain">
        <LenisProvider>
          {children}
        </LenisProvider>
        <Toaster />
      </body>
    </html>
  );
}
