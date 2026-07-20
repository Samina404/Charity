import type { NavItem, SocialLink, ContactInfo } from '@/types';

export const SITE_NAME = 'Hope Foundation';
export const SITE_TAGLINE = 'Building Brighter Futures for Children';
export const SITE_URL = 'https://hopefoundation.org';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'What We Do', href: '/our-work' },
  { label: 'Stories', href: '/stories' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', href: 'https://facebook.com/hopefoundation', icon: 'facebook' },
  { platform: 'Twitter', href: 'https://twitter.com/hopefoundation', icon: 'twitter' },
  { platform: 'Instagram', href: 'https://instagram.com/hopefoundation', icon: 'instagram' },
  { platform: 'YouTube', href: 'https://youtube.com/hopefoundation', icon: 'youtube' },
];

export const CONTACT_INFO: ContactInfo = {
  address: '123 Hope Street, Compassion City, CA 90210',
  phone: '+1 (555) 123-4567',
  email: 'info@hopefoundation.org',
  hours: 'Mon–Fri: 9:00 AM – 6:00 PM',
};

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'What We Do', href: '/our-work' },
    { label: 'Success Stories', href: '/stories' },
  ],
  support: [
    { label: 'Donate Now', href: '/donate' },
    { label: 'Sponsor a Child', href: '/our-work' },
    { label: 'Volunteer', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};
