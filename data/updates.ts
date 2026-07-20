import type { Update } from '@/types';
import { Locale } from '@/lib/dictionary';

const localizedUpdates: Record<Locale, Update[]> = {
  en: [
    {
      id: '1',
      title: 'New School Opens in Rural Kenya',
      excerpt: 'Thanks to generous donors, we have opened a new primary school serving 200 children in the Rift Valley region. The school features six classrooms, a library, and a clean water system.',
      date: '2026-06-28',
      image: '/images/school2.jpg',
      category: 'Infrastructure',
    },
    {
      id: '2',
      title: 'Summer Reading Program Launches',
      excerpt: 'Our annual summer reading challenge kicks off this July, with over 1,000 children participating across 8 countries. Each child who completes the challenge receives a personal library of 5 books.',
      date: '2026-06-15',
      image: '/images/update-2.webp',
      category: 'Education',
    },
    {
      id: '3',
      title: 'Annual Gala Raises Record $500K',
      excerpt: 'The Hope Foundation Annual Gala brought together 400 supporters for an evening of inspiration and generosity, raising a record $500,000 for our children\'s programs worldwide.',
      date: '2026-05-20',
      image: '/images/claudia-raya-iYtYZ5H-9ws-unsplash.jpg',
      category: 'Fundraising',
    },
  ],
  bn: [
    {
      id: '1',
      title: 'গ্রামীণ কেনিয়ায় নতুন স্কুল চালু',
      excerpt: 'উদার দাতাদের ধন্যবাদ, আমরা রিফট ভ্যালি অঞ্চলে ২০০ জন শিশুর সেবা প্রদানের জন্য একটি নতুন প্রাথমিক বিদ্যালয় খুলেছি। বিদ্যালয়টিতে ছয়টি শ্রেণীকক্ষ, একটি পাঠাগার এবং একটি বিশুদ্ধ পানির ব্যবস্থা রয়েছে।',
      date: '2026-06-28',
      image: '/images/school2.jpg',
      category: 'অবকাঠামো',
    },
    {
      id: '2',
      title: 'গ্রীষ্মকালীন পঠন কর্মসূচি শুরু',
      excerpt: 'আমাদের বার্ষিক গ্রীষ্মকালীন পাঠ চ্যালেঞ্জ এই জুলাই মাসে শুরু হচ্ছে, যেখানে ৮টি দেশের ১,০০০-এরও বেশি শিশু অংশ নিচ্ছে। যে শিশু চ্যালেঞ্জটি সম্পন্ন করবে সে ৫টি বইয়ের একটি ব্যক্তিগত লাইব্রেরি পাবে।',
      date: '2026-06-15',
      image: '/images/update-2.webp',
      category: 'শিক্ষা',
    },
    {
      id: '3',
      title: 'বার্ষিক উৎসবে রেকর্ড $৫০০K তহবিল সংগ্রহ',
      excerpt: 'হোপ ফাউন্ডেশনের বার্ষিক গালা অনুদান অনুষ্ঠান ৪০০ জন সমর্থককে একত্রিত করেছে অনুপ্রেরণা ও উদারতার এক সন্ধ্যায়, যা বিশ্বজুড়ে আমাদের শিশু কর্মসূচির জন্য রেকর্ড $৫০০,০০০ সংগ্রহ করেছে।',
      date: '2026-05-20',
      image: '/images/claudia-raya-iYtYZ5H-9ws-unsplash.jpg',
      category: 'তহবিল সংগ্রহ',
    },
  ],
  ar: [
    {
      id: '1',
      title: 'افتتاح مدرسة جديدة في ريف كينيا',
      excerpt: 'بفضل المانحين الأسخياء، افتتحنا مدرسة ابتدائية جديدة تخدم ٢٠٠ طفل في منطقة الوادي المتصدع. وتضم المدرسة ستة فصول دراسية ومكتبة ونظام مياه نظيفة.',
      date: '2026-06-28',
      image: '/images/school2.jpg',
      category: 'البنية التحتية',
    },
    {
      id: '2',
      title: 'إطلاق برنامج القراءة الصيفي',
      excerpt: 'ينطلق تحدي القراءة الصيفي السنوي في يوليو الجاري، بمشاركة أكثر من ١,٠٠٠ طفل في ٨ دول. ويحصل كل طفل يكمل التحدي على مكتبة شخصية تحتوي على ٥ كتب.',
      date: '2026-06-15',
      image: '/images/update-2.webp',
      category: 'التعليم',
    },
    {
      id: '3',
      title: 'الحفل السنوي يجمع مبلغاً قياسياً بقيمة ٥٠٠ ألف دولار',
      excerpt: 'جمع الحفل السنوي لمؤسسة الأمل ٤٠٠ من الداعمين في أمسية مفعمة بالإلهام والكرم، حيث تم جمع مبلغ قياسي قدره ٥٠٠,٠٠٠ دولار لبرامج الأطفال لدينا في جميع أنحاء العالم.',
      date: '2026-05-20',
      image: '/images/claudia-raya-iYtYZ5H-9ws-unsplash.jpg',
      category: 'جمع التبرعات',
    },
  ],
};

export const updates = localizedUpdates.en; // fallback

export function getUpdates(lang: Locale): Update[] {
  return localizedUpdates[lang] ?? localizedUpdates.en;
}
