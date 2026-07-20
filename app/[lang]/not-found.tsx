'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const lang = ['en', 'bn', 'ar'].includes(pathSegments[1]) ? pathSegments[1] : 'en';

  const isRtl = lang === 'ar';

  const title = lang === 'ar' ? 'الصفحة غير موجودة' : lang === 'bn' ? 'পৃষ্ঠাটি পাওয়া যায়নি' : 'Page Not Found';
  const desc = lang === 'ar'
    ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نساعدك في العودة.'
    : lang === 'bn'
      ? 'আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই বা সরানো হয়েছে। চলুন আপনাকে সঠিক পথে ফিরিয়ে নিয়ে যাই।'
      : 'The page you\'re looking for doesn\'t exist or has been moved. Let\'s get you back on track.';
  
  const btnHome = lang === 'ar' ? 'الرئيسية' : lang === 'bn' ? 'হোমে ফিরে যান' : 'Go Home';
  const btnStories = lang === 'ar' ? 'قراءة القصص' : lang === 'bn' ? 'গল্পগুলো পড়ুন' : 'Read Stories';

  return (
    <section className="not-found section" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container not-found__inner">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">{title}</h1>
        <p className="not-found__desc">
          {desc}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href={`/${lang}`} className="btn btn--primary">{btnHome}</Link>
          <Link href={`/${lang}/stories`} className="btn btn--outline">{btnStories}</Link>
        </div>
      </div>
    </section>
  );
}
