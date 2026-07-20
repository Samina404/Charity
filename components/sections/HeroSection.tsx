import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../../lib/images';
import { getDictionary, Locale } from '@/lib/dictionary';

interface HeroSectionProps {
  lang: Locale;
}

export default async function HeroSection({ lang }: HeroSectionProps) {
  const dict = await getDictionary(lang);
  const t = dict.home.hero;

  return (
    <section className="hero" aria-label="Hero">
      {/* Background */}
      <div className="hero__bg">
        <Image
          src={IMAGES.heroBg}
          alt={lang === 'ar' ? 'أطفال يبتسمون ويتعلمون معاً' : lang === 'bn' ? 'শিশুরা হাসছে এবং একসাথে শিখছে' : 'Children smiling and learning together'}
          fill
          priority
          className="hero__bg-image"
          sizes="100vw"
          quality={85}
        />
        <div className="hero__overlay" />
      </div>

      <Container className="hero__content">
        <div className="hero__text">
          <span className="hero__eyebrow">{t.eyebrow}</span>
          <h1 className="hero__title">
            {t.title_normal}<span className="hero__title-accent">{t.title_accent}</span>
          </h1>
          <p className="hero__subtitle">
            {t.subtitle}
          </p>

          <div className="hero__actions">
            <Link href={`/${lang}/donate`} className="btn btn--primary btn--lg hero__cta-primary">
              {t.cta_primary}
            </Link>
            <Link href={`/${lang}/stories`} className="btn btn--outline hero__cta-secondary">
              {t.cta_secondary}
            </Link>
          </div>

          <div className="hero__trust">
            <span className="flex items-center gap-1.5"><ShieldCheck size={18} className="text-[var(--gold-500)]" /> {t.trust_secure}</span>
            <span className="flex items-center gap-1.5"><Star size={18} className="text-[var(--gold-500)]" /> {t.trust_rating}</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-[var(--gold-500)]" /> {t.trust_certified}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
