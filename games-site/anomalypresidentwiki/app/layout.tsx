import type { Metadata, Viewport } from 'next';
import './globals.css';
import { defaultViewport } from '@/lib/seo-config';
import { defaultMetadata as dm } from '@/lib/metadata';
import { websiteSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdsterraSlot from '@/components/AdsterraSlot';
import { ADSTERRA_ZONES } from '@/lib/adsterra-zones';

export const viewport: Viewport = defaultViewport;

export const metadata: Metadata = { ...dm };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0f0f23] text-gray-200">
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7211682665758448"
          crossOrigin="anonymous"
        />
        <JsonLd data={websiteSchema()} />
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        {/* ADSTERRA:HOME:START */}
        <div className="max-w-3xl mx-auto px-4 pb-12">
          {ADSTERRA_ZONES.guide.map((zone) => (
            <AdsterraSlot key={`home-${zone.name}`} variant="home" html={zone.html} />
          ))}
        </div>
        {/* ADSTERRA:HOME:END */}
        <Footer />
        {/* ADSTERRA:GLOBAL:START */}
        {ADSTERRA_ZONES.global.map((zone) => (
          <AdsterraSlot key={zone.name} variant="global" html={zone.html} />
        ))}
        {/* ADSTERRA:GLOBAL:END */}
      </body>
    </html>
  );
}
