import Link from 'next/link';
import Container from '@/components/layout/Container';
import { ShieldCheck } from 'lucide-react';
import { IMAGES } from '../../lib/images';
import { getDictionary, Locale } from '@/lib/dictionary';

interface DonateSectionProps {
  lang: Locale;
}

export default async function DonateSection({ lang }: DonateSectionProps) {
  const dict = await getDictionary(lang);
  const t = dict.home.donate;

  return (
    <section 
      className="donate-cta section" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${IMAGES.donateCtaBg})` }}
      aria-label="Donate CTA"
    >
      <Container className="donate-cta__inner">
        <div className="donate-cta__content">
          <span className="donate-cta__eyebrow">{t.eyebrow}</span>
          <h2 className="donate-cta__title">{t.title}</h2>
          <p className="donate-cta__subtitle">{t.subtitle}</p>
          <div className="donate-cta__actions">
            <Link href={`/${lang}/donate`} className="btn btn--primary btn--lg donate-cta__btn">
              {t.cta_primary}
            </Link>
            <Link href={`/${lang}/stories`} className="btn donate-cta__btn donate-cta__btn--ghost">
              {t.cta_secondary}
            </Link>
          </div>
          <p className="donate-cta__legal flex items-center justify-center gap-1.5">
            <ShieldCheck size={16} className="text-[var(--gold-500)]" /> {t.trust}
          </p>
        </div>
      </Container>
    </section>
  );
}
