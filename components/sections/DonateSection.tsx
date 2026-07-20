import Link from 'next/link';
import Container from '@/components/layout/Container';
import { ShieldCheck } from 'lucide-react';
import { IMAGES } from '../../lib/images';

export default function DonateSection() {
  return (
    <section 
      className="donate-cta section" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${IMAGES.donateCtaBg})` }}
      aria-label="Donate CTA"
    >
      <Container className="donate-cta__inner">
        <div className="donate-cta__content">
          <span className="donate-cta__eyebrow">Make a Difference Today</span>
          <h2 className="donate-cta__title">
            Your Gift Changes a Child&apos;s Life Forever
          </h2>
          <p className="donate-cta__subtitle">
            Just $25 a month provides school supplies and daily meals for one child.
            Every contribution, no matter the size, creates lasting impact.
          </p>
          <div className="donate-cta__actions">
            <Link href="/donate" className="btn btn--primary btn--lg donate-cta__btn">
              Donate Now
            </Link>
            <Link href="/stories" className="btn donate-cta__btn donate-cta__btn--ghost">
              Read Stories
            </Link>
          </div>
          <p className="donate-cta__legal flex items-center justify-center gap-1.5">
            <ShieldCheck size={16} className="text-[var(--gold-500)]" /> Secure · Tax deductible · Cancel anytime
          </p>
        </div>
      </Container>
    </section>
  );
}
