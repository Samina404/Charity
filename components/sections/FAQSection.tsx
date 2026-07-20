import Link from 'next/link';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import { getFAQs } from '@/data/faq';
import { getDictionary, Locale } from '@/lib/dictionary';

interface FAQSectionProps {
  lang: Locale;
}

export default async function FAQSection({ lang }: FAQSectionProps) {
  const dict = await getDictionary(lang);
  const t = dict.home.faq;
  const preview = getFAQs(lang).slice(0, 4);

  return (
    <section className="faq-section section section--alt">
      <Container className="faq-section__inner">
        <div className="faq-section__heading">
          <SectionHeading
            title={t.title}
            subtitle={t.subtitle}
          />
        </div>

        <FAQAccordion faqs={preview} />

        <div className="faq-section__more">
          <Link href={`/${lang}/faq`} className="btn btn--outline">
            {t.cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
