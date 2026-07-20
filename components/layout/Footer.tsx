import Link from 'next/link';
import Logo from '@/components/common/Logo';
import SocialLinks from '@/components/common/SocialLinks';
import { Locale } from '@/lib/dictionary';

interface FooterProps {
  dict: {
    tagline: string;
    quick_links: string;
    support: string;
    legal: string;
    copyright: string;
    links: {
      about: string;
      'our-work': string;
      stories: string;
      donate: string;
      sponsor: string;
      volunteer: string;
      faq: string;
      privacy: string;
      terms: string;
    };
  };
  contactInfo: {
    phone_support: string;
    email_inquiries: string;
    office_location: string;
    office_hours: string;
  };
  lang: Locale;
}

export default function Footer({ dict, contactInfo, lang }: FooterProps) {
  // Hardcoded values from lib/constants mapped to their localized keys
  const address = '123 Hope Street, Compassion City, CA 90210';
  const phone = '+1 (555) 123-4567';
  const email = 'info@hopefoundation.org';
  const hours = lang === 'ar' ? 'الإثنين–الجمعة: ٩:٠٠ ص – ٦:٠٠ م' : lang === 'bn' ? 'সোম–শুক্র: সকাল ৯:০০ – সন্ধ্যা ৬:০০' : 'Mon–Fri: 9:00 AM – 6:00 PM';

  const quickLinks = [
    { label: dict.links.about, href: '/about' },
    { label: dict.links['our-work'], href: '/our-work' },
    { label: dict.links.stories, href: '/stories' },
  ];

  const supportLinks = [
    { label: dict.links.donate, href: '/donate' },
    { label: dict.links.sponsor, href: '/our-work' },
    { label: dict.links.volunteer, href: '/contact' },
    { label: dict.links.faq, href: '/faq' },
  ];

  const legalLinks = [
    { label: dict.links.privacy, href: '/privacy' },
    { label: dict.links.terms, href: '/terms' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">{dict.tagline}</p>
          <SocialLinks />
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">{dict.quick_links}</h3>
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={`/${lang}${link.href}`} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">{dict.support}</h3>
          <ul className="footer__links">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <Link href={`/${lang}${link.href}`} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">
            {lang === 'ar' ? 'اتصل بنا' : lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
          </h3>
          <address className="footer__address">
            <p>{address}</p>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="footer__link">
              {phone}
            </a>
            <a href={`mailto:${email}`} className="footer__link">
              {email}
            </a>
            <p>{hours}</p>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="footer__copy">{dict.copyright}</p>
          <div className="footer__legal">
            {legalLinks.map((link) => (
              <Link key={link.href} href={`/${lang}${link.href}`} className="footer__link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
