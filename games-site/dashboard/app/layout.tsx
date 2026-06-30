import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Traffic Dashboard',
  description: 'Monitor website traffic across all properties',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
