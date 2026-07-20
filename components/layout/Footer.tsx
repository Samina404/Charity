import Link from 'next/link';
import Logo from '@/components/common/Logo';
import SocialLinks from '@/components/common/SocialLinks';
import { FOOTER_LINKS, CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">
            Building brighter futures for children around the world - one life at a time.
          </p>
          <SocialLinks />
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Get Involved</h3>
          <ul className="footer__links">
            {FOOTER_LINKS.support.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact Us</h3>
          <address className="footer__address">
            <p>{CONTACT_INFO.address}</p>
            <a href={`tel:${CONTACT_INFO.phone}`} className="footer__link">
              {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="footer__link">
              {CONTACT_INFO.email}
            </a>
            <p>{CONTACT_INFO.hours}</p>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">
            © {new Date().getFullYear()} Hope Foundation. All rights reserved. Registered 501(c)(3) nonprofit.
          </p>
          <div className="footer__legal">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="footer__link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
