import Link from 'next/link';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import { faqs } from '@/data/faq';

export default function FAQSection() {
  const preview = faqs.slice(0, 4);

  return (
    <section className="faq-section section section--alt">
      <Container className="faq-section__inner">
        <div className="faq-section__heading">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Have questions? We have answers. Reach out anytime for more."
          />
        </div>

        <FAQAccordion faqs={preview} />

        <div className="faq-section__more">
          <Link href="/faq" className="btn btn--outline">
            View All FAQs →
          </Link>
        </div>
      </Container>
    </section>
  );
}
