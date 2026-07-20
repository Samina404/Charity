import Link from 'next/link';
import Container from '@/components/layout/Container';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Terms & Conditions',
  description: 'Read the terms that govern your use of Hope Foundation website and services.',
  path: '/terms',
});

const termsSections = [
  {
    title: 'Use of the website',
    points: [
      'Use this site for lawful and respectful purposes only.',
      'Do not try to damage, disrupt, or misuse the website or its content.',
      'We may update or remove content when needed.',
    ],
  },
  {
    title: 'Donations and support',
    points: [
      'All donations are processed through approved secure channels.',
      'Receipts are issued using the information provided at checkout.',
      'Restricted gifts are used for the stated purpose whenever possible.',
    ],
  },
  {
    title: 'Intellectual property',
    points: [
      'Text, photos, logos, and design elements belong to Hope Foundation or its partners.',
      'You may not copy or reuse materials without permission unless allowed by law.',
      'You are welcome to share links to our public pages.',
    ],
  },
  {
    title: 'Changes and contact',
    points: [
      'We may revise these terms from time to time to reflect legal or operational changes.',
      'Your continued use of the site means you accept the current version.',
      'Please contact us if you have any questions.',
    ],
  },
];

const toc = termsSections.map((section) => ({
  id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  title: section.title,
}));

export default function TermsPage() {
  return (
    <section className="section">
      <Container>
        <article style={{ maxWidth: 760, margin: '0 auto' }}>
          <header style={{ marginBottom: '2rem' }}>
            <p className="work-hero__label" style={{ marginBottom: '.6rem' }}>
              Legal
            </p>
            <h1 className="legal-page__title" style={{ marginBottom: '.85rem' }}>
              Terms & Conditions
            </h1>
            <p className="legal-page__intro" style={{ maxWidth: 620 }}>
              These terms explain how visitors can use the Hope Foundation website and what to expect
              when making donations or interacting with our services.
            </p>
            <div className="legal-meta" style={{ marginTop: '1rem' }}>
              <span className="legal-meta__item">Last updated: July 9, 2026</span>
              <span className="legal-meta__item">Simple usage rules</span>
              <span className="legal-meta__item">Donation guidance</span>
            </div>
          </header>

          <nav className="legal-toc legal-toc--inline" aria-label="Terms table of contents">
            {toc.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="legal-toc__link">
                {item.title}
              </a>
            ))}
          </nav>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--neutral-200)' }}>
            {termsSections.map((section, index) => {
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
              <p className="legal-card__title">Need help?</p>
              <p className="legal-card__text">
                If anything here is unclear, our team can help explain it.
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
