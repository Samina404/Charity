import Image from 'next/image';
import Container from '@/components/layout/Container';
import DonationTierCard from '@/components/cards/DonationTierCard';
import DonateForm from '@/components/common/DonateForm';
import SectionHeading from '@/components/ui/SectionHeading';
import { getDonationTiers } from '@/data/donation';
import { generatePageMetadata } from '@/lib/metadata';
import { IMAGES } from '@/lib/images';
import { getDictionary, Locale } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return generatePageMetadata({
    title: dict.meta.donate_title,
    description: dict.meta.donate_desc,
    path: `/${lang}/donate`,
  });
}

export default async function DonatePage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.donate_page;
  const tiers = getDonationTiers(lang as Locale);

  return (
    <>
      <section className="work-hero section" aria-label="Donate hero" style={{ paddingBlock: '4.5rem 3rem', overflow: 'hidden' }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div className="work-hero__label">{t.label}</div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--text)' }}>
                {t.title}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: '640px' }}>
                {t.sub}
              </p>
            </div>

            {/* Panoramic Image Banner */}
            <div style={{ position: 'relative', width: '100%', height: '340px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--neutral-200)' }}>
              <Image
                src={IMAGES.donateBg}
                alt={lang === 'ar' ? 'أطفال يستفيدون من التبرعات' : lang === 'bn' ? 'অনুদান থেকে উপকৃত হচ্ছে শিশুরা' : 'Donating to children in need'}
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
            title={t.impact_title}
            subtitle={t.impact_sub}
          />
          <div className="donation-tiers__grid">
            {tiers.map((tier) => (
              <DonationTierCard key={tier.id} tier={tier} lang={lang as Locale} />
            ))}
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="section section--alt">
        <Container>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <SectionHeading
              title={t.form_title}
              subtitle={t.form_sub}
            />
            <DonateForm lang={lang as Locale} dict={t.form} />
          </div>
        </Container>
      </section>
    </>
  );
}
