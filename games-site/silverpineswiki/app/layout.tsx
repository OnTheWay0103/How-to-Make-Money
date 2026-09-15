import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { defaultViewport } from '@/lib/seo-config';
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
        <Footer />
      </body>
    </html>
  );
}
