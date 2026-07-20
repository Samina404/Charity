'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'lucide-react';
import NavLink from '@/components/common/NavLink';
import Logo from '@/components/common/Logo';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { NavItem } from '@/types';
import { Locale } from '@/lib/dictionary';

interface MobileMenuProps {
  navItems: NavItem[];
  donateLabel: string;
  closeLabel: string;
  openLabel: string;
  lang: Locale;
}

export default function MobileMenu({ navItems, donateLabel, closeLabel, openLabel, lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) {
      return;
    }

    previousPathnameRef.current = pathname;

    const closeOnRouteChange = window.setTimeout(() => setIsOpen(false), 0);
    return () => window.clearTimeout(closeOnRouteChange);
  }, [pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        id="mobile-menu-toggle"
        className={`mobile-menu__toggle ${isOpen ? 'mobile-menu__toggle--open' : ''}`}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? closeLabel : openLabel}
        onClick={() => setIsOpen((o) => !o)}
      >
        <span className="mobile-menu__bar" />
        <span className="mobile-menu__bar" />
        <span className="mobile-menu__bar" />
      </button>

      {isMounted && isOpen && typeof document !== 'undefined'
        ? createPortal(
            <>
              <div
                className="mobile-menu__backdrop mobile-menu__backdrop--open"
                onClick={close}
                aria-hidden="true"
              />

              <nav
                id="mobile-menu-panel"
                className="mobile-menu__panel mobile-menu__panel--open"
                aria-label="Mobile navigation"
              >
                <div className="mobile-menu__header">
                  <Link href={`/${lang}`} onClick={close}>
                    <Logo />
                  </Link>
                  <button type="button" className="mobile-menu__close" onClick={close} aria-label={closeLabel}>
                    <X size={22} />
                  </button>
                </div>
                <ul className="mobile-menu__list">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <NavLink item={item} onClick={close} className="mobile-menu__link" />
                    </li>
                  ))}
                  
                  {/* Language switcher option for mobile view */}
                  <li style={{ paddingInline: '1.5rem', marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                      {lang === 'ar' ? 'اختر اللغة' : lang === 'bn' ? 'ভাষা নির্বাচন করুন' : 'Select Language'}
                    </span>
                    <LanguageSwitcher currentLang={lang} />
                  </li>
                </ul>
                <Link href={`/${lang}/donate`} className="btn btn--primary mobile-menu__cta" onClick={close}>
                  {donateLabel}
                </Link>
              </nav>
            </>,
            document.body,
          )
        : null}
      </>
  );
}
