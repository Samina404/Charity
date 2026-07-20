import Link from 'next/link';
import Logo from '@/components/common/Logo';
import NavLink from '@/components/common/NavLink';
import MobileMenu from '@/components/layout/MobileMenu';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { Locale } from '@/lib/dictionary';

interface NavbarProps {
  dict: {
    home: string;
    about: string;
    'our-work': string;
    stories: string;
    faq: string;
    contact: string;
    donate: string;
    logo_title: string;
    close_menu: string;
    open_menu: string;
  };
  lang: Locale;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const navItems = [
    { label: dict.home, href: '/' },
    { label: dict.about, href: '/about' },
    { label: dict['our-work'], href: '/our-work' },
    { label: dict.stories, href: '/stories' },
    { label: dict.faq, href: '/faq' },
    { label: dict.contact, href: '/contact' },
  ];

  return (
    <header className="navbar" role="banner">
      <div className="navbar__inner container">
        {/* Logo */}
        <Link href={`/${lang}`} className="navbar__logo" aria-label={`${dict.logo_title} — Home`}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA & Language Switcher */}
        <div className="flex items-center gap-4 navbar__right">
          <LanguageSwitcher currentLang={lang} />
          
          <Link href={`/${lang}/donate`} className="btn btn--primary navbar__cta">
            {dict.donate}
          </Link>
        </div>

        {/* Mobile menu (client island) */}
        <MobileMenu 
          navItems={navItems} 
          donateLabel={dict.donate} 
          closeLabel={dict.close_menu} 
          openLabel={dict.open_menu} 
          lang={lang}
        />
      </div>
    </header>
  );
}
