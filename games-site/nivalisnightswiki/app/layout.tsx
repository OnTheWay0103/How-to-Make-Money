import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { defaultViewport, SITE_CONFIG } from '@/lib/seo-config';
import { defaultMetadata as dm } from '@/lib/metadata';
import { websiteSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = GeistSans;

const geistMono = GeistMono;

export const viewport: Viewport = defaultViewport;

export const metadata: Metadata = { ...dm };

// Typed as string so the guard stays meaningful when the config value is ''.
const adsenseClientId: string = SITE_CONFIG.googleAdsenseId;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0f23] text-gray-200">
        {/* Google AdSense — only rendered once a client ID is configured */}
        {adsenseClientId.length > 0 && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        )}
        <JsonLd data={websiteSchema()} />
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Adsterra — site-wide script (popunder/social bar) */}
        <script
          data-cfasync="false"
          src="https://bauval.org/14/5ae50bbc889b75a09700447dfc343cbe"
        />
      </body>
    </html>
  );
}
