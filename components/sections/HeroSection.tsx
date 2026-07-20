import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../../lib/images';

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Hero">
      {/* Background */}
      <div className="hero__bg">
        <Image
          src={IMAGES.heroBg}
          alt="Children smiling and learning together"
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
          <span className="hero__eyebrow">Changing Lives Since 2005</span>
          <h1 className="hero__title">
            Every Child Deserves a <span className="hero__title-accent">Bright Future</span>
          </h1>
          <p className="hero__subtitle">
            Hope Foundation provides education, nutrition, and care to children in need across
            45+ communities worldwide. Together, we can give every child the chance they deserve.
          </p>

          <div className="hero__actions">
            <Link href="/donate" className="btn btn--primary btn--lg hero__cta-primary">
              Donate Now
            </Link>
            <Link href="/stories" className="btn btn--outline hero__cta-secondary">
              Read Stories
            </Link>
          </div>

          <div className="hero__trust">
            <span className="flex items-center gap-1.5"><ShieldCheck size={18} className="text-[var(--gold-500)]" /> Secure &amp; tax deductible</span>
            <span className="flex items-center gap-1.5"><Star size={18} className="text-[var(--gold-500)]" /> 4-star Charity Navigator rating</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-[var(--gold-500)]" /> 501(c)(3) certified</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
