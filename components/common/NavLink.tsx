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
  const isActive =
    item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`nav-link ${isActive ? 'nav-link--active' : ''} ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
    </Link>
  );
}
