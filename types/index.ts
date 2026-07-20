export interface Child {
  id: string;
  slug: string;
  name: string;
  age: number;
  location: string;
  story: string;
  excerpt: string;
  image: string;
  fundingGoal: number;
  fundingRaised: number;
  needs: string[];
  featured: boolean;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  childName: string;
  date: string;
  image: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  width: number;
  height: number;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Update {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface DonationTier {
  id: string;
  amount: number;
  title: string;
  description: string;
  impact: string;
  popular: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}
