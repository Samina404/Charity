'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { NavItem } from '@/types';

interface NavLinkProps {
  item: NavItem;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({ item, onClick, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const lang = pathSegments[1]; // 'en', 'bn', 'ar'
  
  // Reconstruct path without language prefix for active check
  const currentPathWithoutLang = '/' + pathSegments.slice(2).join('/');
  
  // Build target localized URL
  const targetHref = `/${lang}${item.href === '/' ? '' : item.href}`;
  
  const isActive = item.href === '/'
    ? currentPathWithoutLang === '/' || currentPathWithoutLang === ''
    : currentPathWithoutLang.startsWith(item.href);

  return (
    <Link
      href={targetHref}
      onClick={onClick}
      className={`nav-link ${isActive ? 'nav-link--active' : ''} ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
    </Link>
  );
}
