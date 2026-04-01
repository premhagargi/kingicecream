import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import LenisProvider from '@/components/LenisProvider';

export const metadata: Metadata = {
  title: 'King Ice Cream',
  description: 'A premium, visually immersive ice cream brand experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload all Nohemi font weights for performance */}
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Thin-BF6438cc577ef3b.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-ExtraLight-BF6438cc581502c.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Light-BF6438cc5702321.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Regular-BF6438cc579d934.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Medium-BF6438cc57ddecd.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-SemiBold-BF6438cc57db2ff.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Bold-BF6438cc577b524.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-ExtraBold-BF6438cc5761ae2.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Nohemi-Font/Nohemi-Black-BF6438cc565e67b.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      </head>
      <body className="font-nohemi antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
        <Toaster />
      </body>
    </html>
  );
}
