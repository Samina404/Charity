import Link from 'next/link';
import Container from '@/components/layout/Container';
import FAQAccordion from '@/components/common/FAQAccordion';
import { faqs } from '@/data/faq';
import { generatePageMetadata } from '@/lib/metadata';
import { HelpCircle, Mail, Phone, FileText, ArrowRight } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'FAQ',
  description:
    'Frequently asked questions about Hope Foundation — donations, sponsorships, volunteering, transparency, and more.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="work-hero faq-hero section" aria-label="FAQ hero" style={{ paddingBlock: '6rem 4rem', overflow: 'hidden' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="program-row">
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="work-hero__label">FAQ Help Desk</div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
                Frequently Asked,
                <br />
                Clearly Answered
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                Everything you need to know about donating, sponsoring, volunteering, and how our foundation ensures 100% transparency.
              </p>
            </div>

            {/* Right Column: Support Action Box */}
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--neutral-200)',
                background: 'var(--bg)',
                boxShadow: 'var(--shadow-lg)',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                  <HelpCircle size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>Need Immediate Help?</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>Our support desk is here for you</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="mailto:support@hopefoundation.org" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', background: 'var(--neutral-100)', border: '1px solid var(--neutral-200)', transition: 'background 0.2s' }} className="support-link-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} className="text-[var(--text-muted)]" />
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>support@hopefoundation.org</span>
                  </div>
                  <ArrowRight size={16} className="text-[var(--gold-600)]" />
                </a>

                <a href="tel:+18005550199" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', background: 'var(--neutral-100)', border: '1px solid var(--neutral-200)', transition: 'background 0.2s' }} className="support-link-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={18} className="text-[var(--text-muted)]" />
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>+1 (800) 555-0199</span>
                  </div>
                  <ArrowRight size={16} className="text-[var(--gold-600)]" />
                </a>

                <Link href="/donate" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', background: 'var(--neutral-100)', border: '1px solid var(--neutral-200)', transition: 'background 0.2s' }} className="support-link-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FileText size={18} className="text-[var(--text-muted)]" />
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Audit &amp; Finance Reports</span>
                  </div>
                  <ArrowRight size={16} className="text-[var(--gold-600)]" />
                </Link>
              </div>

              <Link href="/contact" className="btn btn--primary btn--lg" style={{ width: '100%' }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Main FAQ List (Asymmetric Grid) ─────────────── */}
      <section className="section" style={{ background: 'var(--neutral-100)', borderTop: '1px solid var(--neutral-200)', borderBottom: '1px solid var(--neutral-200)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }} className="program-row">
            {/* Left Narrative */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '800', color: 'var(--gold-700)', background: 'var(--gold-100)', padding: '0.35rem 0.95rem', borderRadius: '999px', width: 'fit-content' }}>
                Common Questions
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', lineHeight: '1.15' }}>
                Frequently Asked Inquiries
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Browse our compiled list of questions regarding tax receipts, sponsorship cycles, field work verification, and fund allocation.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                If you still can&apos;t find what you&apos;re looking for, contact our support team and we will reply directly within 24 hours.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <Link href="/contact" className="btn btn--outline">
                  Contact Support Desk
                </Link>
              </div>
            </div>

            {/* Right Accordion */}
            <div>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
