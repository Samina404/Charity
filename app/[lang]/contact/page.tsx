import Container from '@/components/layout/Container';
import ContactForm from '@/components/common/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { getDictionary, Locale } from '@/lib/dictionary';
import { generatePageMetadata } from '@/lib/metadata';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return generatePageMetadata({
    title: dict.meta.contact_title,
    description: dict.meta.contact_desc,
    path: `/${lang}/contact`,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.contact;
  const c = dict.contact_info;

  // Contact details
  const address = '123 Hope Street, Compassion City, CA 90210';
  const phone = '+1 (555) 123-4567';
  const email = 'info@hopefoundation.org';
  const hours = lang === 'ar' ? 'الإثنين–الجمعة: ٩:٠٠ ص – ٦:٠٠ م' : lang === 'bn' ? 'সোম–শুক্র: সকাল ৯:০০ – সন্ধ্যা ৬:০০' : 'Mon–Fri: 9:00 AM – 6:00 PM';

  return (
    <>
      <section className="work-hero contact-hero section" aria-label="Contact hero" style={{ paddingBlock: '4.5rem 3rem', overflow: 'hidden' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="program-row">
            {/* Left Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="work-hero__label">{t.label}</div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}>
                {t.title}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                {t.sub}
              </p>

              {/* Direct Info List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)', flexShrink: 0 }}>
                    <Phone size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>{c.phone_support}</h4>
                    <a href={`tel:${phone.replace(/\s/g, '')}`} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text)', transition: 'color 0.2s' }} className="hover:text-[var(--gold-600)]">{phone}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)', flexShrink: 0 }}>
                    <Mail size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>{c.email_inquiries}</h4>
                    <a href={`mailto:${email}`} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text)', transition: 'color 0.2s' }} className="hover:text-[var(--gold-600)]">{email}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)', flexShrink: 0 }}>
                    <MapPin size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>{c.office_location}</h4>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text)', transition: 'color 0.2s' }} className="hover:text-[var(--gold-600)]">{address}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)', flexShrink: 0 }}>
                    <Clock size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>{c.office_hours}</h4>
                    <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text)' }}>{hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <ContactForm dict={t} />
          </div>
        </Container>
      </section>
    </>
  );
}
