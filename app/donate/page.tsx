import Image from 'next/image';
import Container from '@/components/layout/Container';
import DonationTierCard from '@/components/cards/DonationTierCard';
import DonateForm from '@/components/common/DonateForm';
import SectionHeading from '@/components/ui/SectionHeading';
import { donationTiers } from '@/data/donation';
import { generatePageMetadata } from '@/lib/metadata';
import { IMAGES } from '../../lib/images';

export const metadata = generatePageMetadata({
  title: 'Donate',
  description:
    'Make a tax-deductible donation to Hope Foundation. Your gift provides education, nutrition, and healthcare to children in need.',
  path: '/donate',
});

export default function DonatePage() {
  return (
    <>
      <section className="work-hero section" aria-label="Donate hero" style={{ paddingBlock: '4.5rem 3rem', overflow: 'hidden' }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div className="work-hero__label">Support Our Mission</div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--text)' }}>
                Make a Donation
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: '640px' }}>
                Your generosity transforms lives. Choose a giving level or enter a custom amount below to begin.
              </p>
            </div>

            {/* Panoramic Image Banner */}
            <div style={{ position: 'relative', width: '100%', height: '340px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--neutral-200)' }}>
              <Image
                src={IMAGES.donateBg}
                alt="Donation impact banner"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 640px) 100vw, 80vw"
                quality={90}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <section className="section">
        <Container>
          <SectionHeading
            title="Choose Your Impact"
            subtitle="Every tier makes a measurable difference in a child's life."
          />
          <div className="donation-tiers__grid">
            {donationTiers.map((tier) => (
              <DonationTierCard key={tier.id} tier={tier} />
            ))}
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="section section--alt">
        <Container>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <SectionHeading
              title="Quick Donate"
              subtitle="Prefer to donate directly? Use the form below."
            />
            <DonateForm />
          </div>
        </Container>
      </section>
    </>
  );
}
