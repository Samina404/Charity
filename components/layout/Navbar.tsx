import Link from 'next/link';
import Logo from '@/components/common/Logo';
import NavLink from '@/components/common/NavLink';
import MobileMenu from '@/components/layout/MobileMenu';
import { NAV_ITEMS } from '@/lib/constants';

export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="navbar__inner container">
        {/* Logo */}
        <Link href="/" className="navbar__logo" aria-label="Hope Foundation — Home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link href="/donate" className="btn btn--primary navbar__cta">
          Donate Now
        </Link>

        {/* Mobile menu (client island) */}
        <MobileMenu />
      </div>
    </header>
  );
}
