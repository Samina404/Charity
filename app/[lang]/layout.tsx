import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import ScrollToTopOnRefresh from '@/components/common/ScrollToTopOnRefresh';
import { getDictionary, Locale, locales } from '@/lib/dictionary';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const isRtl = lang === 'ar';

  return (
    <html lang={lang} dir={isRtl ? 'rtl' : 'ltr'}>
      <body suppressHydrationWarning className={isRtl ? 'rtl-layout' : ''}>
        <ScrollToTopOnRefresh />
        <Navbar dict={dict.nav} lang={lang as Locale} />
        <main id="main-content">{children}</main>
        <Footer dict={dict.footer} contactInfo={dict.contact_info} lang={lang as Locale} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
