import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ScrollToTopOnRefresh from '@/components/common/ScrollToTopOnRefresh';

export const metadata: Metadata = {
  title: 'Hope Foundation | Building Brighter Futures for Children',
  description:
    'Hope Foundation provides education, nutrition, and care to children in need across 45+ communities worldwide. Donate or sponsor a child today.',
  keywords: ['charity', 'children', 'donate', 'hope', 'foundation', 'education', 'nonprofit'],
  openGraph: {
    title: 'Hope Foundation',
    description: 'Building brighter futures for children around the world.',
    siteName: 'Hope Foundation',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ScrollToTopOnRefresh />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

