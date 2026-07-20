import type { FAQ } from '@/types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How does my donation help children?',
    answer:
      'Your donation directly funds education, nutrition, healthcare, and safe housing for children in need. We allocate 85% of every dollar to our programs, ensuring maximum impact. Each child receives a personalized care plan that addresses their unique needs.',
    category: 'Donations',
  },
  {
    id: '2',
    question: 'Can I sponsor a specific child?',
    answer:
      'Yes! You can browse our children\'s profiles and choose a child to sponsor. As a sponsor, you\'ll receive regular updates, photos, and letters from your sponsored child. Sponsorship starts at $25/month and covers education, meals, and basic healthcare.',
    category: 'Sponsorship',
  },
  {
    id: '3',
    question: 'Is my donation tax-deductible?',
    answer:
      'Yes, Hope Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law. You will receive an official tax receipt via email for every donation.',
    category: 'Donations',
  },
  {
    id: '4',
    question: 'How can I volunteer with Hope Foundation?',
    answer:
      'We welcome volunteers both locally and internationally. You can apply through our Contact page or email us at volunteer@hopefoundation.org. Opportunities include teaching, mentoring, fundraising, event coordination, and field visits to our program sites.',
    category: 'Volunteering',
  },
  {
    id: '5',
    question: 'Where does Hope Foundation operate?',
    answer:
      'We currently operate programs in 12 countries across Africa, Asia, South America, and Eastern Europe. Our main program sites are in Kenya, India, Guatemala, Nigeria, China, and Romania, with plans to expand to three additional countries next year.',
    category: 'General',
  },
  {
    id: '6',
    question: 'How do you ensure transparency?',
    answer:
      'We publish annual reports, financial statements, and impact assessments on our website. We are audited annually by an independent firm and maintain a four-star rating on Charity Navigator. Donors can track how their funds are used through our online dashboard.',
    category: 'General',
  },
  {
    id: '7',
    question: 'Can I make a one-time donation instead of monthly?',
    answer:
      'Absolutely! While monthly sponsorships help us plan long-term programs, one-time donations are equally valued. You can donate any amount through our Donate page. One-time gifts are often directed to urgent needs or special projects.',
    category: 'Donations',
  },
  {
    id: '8',
    question: 'How do I receive updates about my sponsored child?',
    answer:
      'Sponsors receive quarterly updates including photos, school reports, and hand-written letters from their sponsored child. You can also communicate directly through our secure messaging portal. Annual video updates are provided for long-term sponsors.',
    category: 'Sponsorship',
  },
];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

export function getFAQCategories(): string[] {
  return [...new Set(faqs.map((faq) => faq.category))];
}
