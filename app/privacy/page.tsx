import Link from 'next/link';
import Container from '@/components/layout/Container';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Learn how Hope Foundation collects, uses, and protects your information.',
  path: '/privacy',
});

const privacySections = [
  {
    title: 'Information we collect',
    points: [
      'We may collect details you share through forms, donations, email, or phone contact.',
      'We may also collect basic usage data such as page visits and device information.',
      'We only collect what we need to operate the site and support our mission.',
    ],
  },
  {
    title: 'How we use information',
    points: [
      'We use information to process donations, respond to inquiries, and improve services.',
      'We may send donation receipts, service updates, or charity-related communications.',
      'We do not sell personal information to third parties.',
    ],
  },
  {
    title: 'Sharing and protection',
    points: [
      'We may share data with trusted service providers who help us operate securely.',
      'We use reasonable safeguards to protect information from unauthorized access.',
      'If required by law, we may disclose information to comply with legal obligations.',
    ],
  },
  {
    title: 'Your choices',
    points: [
      'You can contact us to update your details or ask questions about your information.',
      'You may opt out of non-essential communications when applicable.',
      'If our practices change, we will update this page accordingly.',
    ],
  },
];

const toc = privacySections.map((section) => ({
  id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  title: section.title,
}));

export default function PrivacyPage() {
  return (
    <section className="section">
      <Container>
        <article style={{ maxWidth: 760, margin: '0 auto' }}>
          <header style={{ marginBottom: '2rem' }}>
            <p className="work-hero__label" style={{ marginBottom: '.6rem' }}>
              Legal
            </p>
            <h1 className="legal-page__title" style={{ marginBottom: '.85rem' }}>
              Privacy Policy
            </h1>
            <p className="legal-page__intro" style={{ maxWidth: 620 }}>
              This page explains how Hope Foundation handles information from visitors, donors, and supporters.
            </p>
            <div className="legal-meta" style={{ marginTop: '1rem' }}>
              <span className="legal-meta__item">Last updated: July 9, 2026</span>
              <span className="legal-meta__item">Clear data practices</span>
              <span className="legal-meta__item">User privacy first</span>
            </div>
          </header>

          <nav className="legal-toc legal-toc--inline" aria-label="Privacy table of contents">
            {toc.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="legal-toc__link">
                {item.title}
              </a>
            ))}
          </nav>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--neutral-200)' }}>
            {privacySections.map((section, index) => {
              const id = toc[index].id;

              return (
                <section key={section.title} id={id} className="legal-section">
                  <h2 className="legal-section__title">{section.title}</h2>
                  <ul className="legal-card__list">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <div
            className="legal-card"
            style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <div>
              <p className="legal-card__title">Questions?</p>
              <p className="legal-card__text">
                If you want to understand how your information is handled, we&apos;re happy to help.
              </p>
            </div>
            <Link href="/contact" className="btn btn--outline">
              Contact Us
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
