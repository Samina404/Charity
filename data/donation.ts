import type { DonationTier } from '@/types';
import { Locale } from '@/lib/dictionary';

const localizedTiers: Record<Locale, DonationTier[]> = {
  en: [
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
      description: 'Cover a child\'s tuition, school supplies, and daily meals for one month.',
      impact: 'Full monthly support for 1 child',
      popular: true,
    },
    {
      id: '3',
      amount: 100,
      title: 'Bright Tomorrow',
      description: 'Sponsor a child\'s complete needs including education, healthcare, and nutrition for one month.',
      impact: 'Complete care for 1 child for 1 month',
      popular: false,
    },
    {
      id: '4',
      amount: 250,
      title: 'Community Builder',
      description: 'Fund a community project such as a classroom renovation, clean water well, or library expansion.',
      impact: 'Benefits an entire community of 50+ children',
      popular: false,
    },
  ],
  bn: [
    {
      id: '1',
      amount: 25,
      title: 'আশার বীজ',
      description: 'এক মাসের জন্য একটি শিশুর স্কুল সরবরাহ এবং পুষ্টিকর খাবার সরবরাহ করুন।',
      impact: '১ টি শিশুকে ১ মাসের জন্য খাদ্য ও শিক্ষা দেয়',
      popular: false,
    },
    {
      id: '2',
      amount: 50,
      title: 'ক্রমবর্ধমান ভবিষ্যৎ',
      description: 'এক মাসের জন্য একটি শিশুর টিউশন ফি, স্কুল সরবরাহ এবং দৈনিক খাবার কভার করুন।',
      impact: '১ টি শিশুর সম্পূর্ণ মাসিক সহায়তা',
      popular: true,
    },
    {
      id: '3',
      amount: 100,
      title: 'উজ্জ্বল আগামীকাল',
      description: 'এক মাসের জন্য শিক্ষা, স্বাস্থ্যসেবা এবং পুষ্টি সহ একটি শিশুর সম্পূর্ণ চাহিদা স্পনসর করুন।',
      impact: '১ টি শিশুর ১ মাসের সম্পূর্ণ যত্ন',
      popular: false,
    },
    {
      id: '4',
      amount: 250,
      title: 'কমিউনিটি বিল্ডার',
      description: 'শ্রেণীকক্ষ সংস্কার, বিশুদ্ধ পানির কূপ বা লাইব্রেরি সম্প্রসারণের মতো একটি সম্প্রদায় প্রকল্পে অর্থায়ন করুন।',
      impact: '৫০+ শিশুর সমগ্র সম্প্রদায় উপকৃত হয়',
      popular: false,
    },
  ],
  ar: [
    {
      id: '1',
      amount: 25,
      title: 'بذرة الأمل',
      description: 'توفير المستلزمات المدرسية ووجبة مغذية لطفل واحد لمدة شهر.',
      impact: 'يغذي ويعلم طفلاً واحداً لمدة شهر',
      popular: false,
    },
    {
      id: '2',
      amount: 50,
      title: 'مستقبل ينمو',
      description: 'تغطية الرسوم الدراسية للطفل والمستلزمات المدرسية والوجبات اليومية لمدة شهر واحد.',
      impact: 'دعم شهري كامل لطفل واحد',
      popular: true,
    },
    {
      id: '3',
      amount: 100,
      title: 'غد مشرق',
      description: 'رعاية احتياجات الطفل الكاملة بما في ذلك التعليم والرعاية الصحية والتغذية لمدة شهر واحد.',
      impact: 'رعاية كاملة لطفل واحد لمدة شهر',
      popular: false,
    },
    {
      id: '4',
      amount: 250,
      title: 'بناء المجتمع',
      description: 'تمويل مشروع مجتمعي مثل تجديد الفصول الدراسية، أو بئر مياه نظيفة، أو توسيع المكتبة.',
      impact: 'يفيد مجتمعاً كاملاً يضم أكثر من ٥٠ طفلاً',
      popular: false,
    },
  ],
};

export const donationTiers = localizedTiers.en; // fallback for legacy code

export function getDonationTiers(lang: Locale): DonationTier[] {
  return localizedTiers[lang] ?? localizedTiers.en;
}
