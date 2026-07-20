'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { Locale, locales } from '@/lib/dictionary';

interface LanguageSwitcherProps {
  currentLang: Locale;
}

const languageNames = {
  en: 'English',
  bn: 'বাংলা',
  ar: 'العربية',
};

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang: Locale) => {
    setIsOpen(false);
    if (newLang === currentLang) return;

    // Replace the language segment in the pathname
    // e.g. /en/about -> /bn/about
    const pathSegments = pathname.split('/');
    pathSegments[1] = newLang;
    const newPath = pathSegments.join('/');
    router.push(newPath);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} className="text-slate-500" />
        <span>{languageNames[currentLang]}</span>
        <ChevronDown size={14} className={`text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`flex w-full items-center px-4 py-2 text-left text-sm hover:bg-slate-100 hover:text-slate-900 ${
                  currentLang === locale ? 'bg-slate-50 font-bold text-[var(--gold-600)]' : 'text-slate-700'
                }`}
                role="menuitem"
              >
                {languageNames[locale]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
