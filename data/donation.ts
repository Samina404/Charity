import type { DonationTier } from '@/types';

export const donationTiers: DonationTier[] = [
  {
    id: '1',
    amount: 25,
    title: 'Seed of Hope',
    description: 'Provide school supplies and a nutritious meal for one child for a month.',
    impact: 'Feeds and educates 1 child for 1 month',
    popular: false,
  },
  {
    id: '2',
    amount: 50,
    title: 'Growing Future',
    description:
      'Cover a child\'s tuition, school supplies, and daily meals for one month.',
    impact: 'Full monthly support for 1 child',
    popular: true,
  },
  {
    id: '3',
    amount: 100,
    title: 'Bright Tomorrow',
    description:
      'Sponsor a child\'s complete needs including education, healthcare, and nutrition for one month.',
    impact: 'Complete care for 1 child for 1 month',
    popular: false,
  },
  {
    id: '4',
    amount: 250,
    title: 'Community Builder',
    description:
      'Fund a community project such as a classroom renovation, clean water well, or library expansion.',
    impact: 'Benefits an entire community of 50+ children',
    popular: false,
  },
];
