import type { FAQ } from '@/types';
import { Locale } from '@/lib/dictionary';

const localizedFAQs: Record<Locale, FAQ[]> = {
  en: [
    {
      id: '1',
      question: 'How does my donation help children?',
      answer: 'Your donation directly funds education, nutrition, healthcare, and safe housing for children in need. We allocate 85% of every dollar to our programs, ensuring maximum impact. Each child receives a personalized care plan that addresses their unique needs.',
      category: 'Donations',
    },
    {
      id: '2',
      question: 'Can I sponsor a specific child?',
      answer: 'Yes! You can browse our children\'s profiles and choose a child to sponsor. As a sponsor, you\'ll receive regular updates, photos, and letters from your sponsored child. Sponsorship starts at $25/month and covers education, meals, and basic healthcare.',
      category: 'Sponsorship',
    },
    {
      id: '3',
      question: 'Is my donation tax-deductible?',
      answer: 'Yes, Hope Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law. You will receive an official tax receipt via email for every donation.',
      category: 'Donations',
    },
    {
      id: '4',
      question: 'How can I volunteer with Hope Foundation?',
      answer: 'We welcome volunteers both locally and internationally. You can apply through our Contact page or email us at volunteer@hopefoundation.org. Opportunities include teaching, mentoring, fundraising, event coordination, and field visits to our program sites.',
      category: 'Volunteering',
    },
    {
      id: '5',
      question: 'Where does Hope Foundation operate?',
      answer: 'We currently operate programs in 12 countries across Africa, Asia, South America, and Eastern Europe. Our main program sites are in Kenya, India, Guatemala, Nigeria, China, and Romania, with plans to expand to three additional countries next year.',
      category: 'General',
    },
    {
      id: '6',
      question: 'How do you ensure transparency?',
      answer: 'We publish annual reports, financial statements, and impact assessments on our website. We are audited annually by an independent firm and maintain a four-star rating on Charity Navigator. Donors can track how their funds are used through our online dashboard.',
      category: 'General',
    },
    {
      id: '7',
      question: 'Can I make a one-time donation instead of monthly?',
      answer: 'Absolutely! While monthly sponsorships help us plan long-term programs, one-time donations are equally valued. You can donate any amount through our Donate page. One-time gifts are often directed to urgent needs or special projects.',
      category: 'Donations',
    },
    {
      id: '8',
      question: 'How do I receive updates about my sponsored child?',
      answer: 'Sponsors receive quarterly updates including photos, school reports, and hand-written letters from their sponsored child. You can also communicate directly through our secure messaging portal. Annual video updates are provided for long-term sponsors.',
      category: 'Sponsorship',
    },
  ],
  bn: [
    {
      id: '1',
      question: 'আমার অনুদান কীভাবে শিশুদের সাহায্য করে?',
      answer: 'আপনার অনুদান সরাসরি সুবিধাবঞ্চিত শিশুদের শিক্ষা, পুষ্টি, স্বাস্থ্যসেবা এবং নিরাপদ বাসস্থানের জন্য অর্থায়ন করে। আমরা বার্ষিক আয়ের ৮৫% সরাসরি কর্মসূচিতে বরাদ্দ করি, যা সর্বোচ্চ প্রভাব নিশ্চিত করে। প্রতিটি শিশু একটি ব্যক্তিগত যত্ন পরিকল্পনা পায় যা তাদের অনন্য চাহিদা পূরণ করে।',
      category: 'অনুদান',
    },
    {
      id: '2',
      question: 'আমি কি একটি নির্দিষ্ট শিশুকে স্পনসর করতে পারি?',
      answer: 'হ্যাঁ! আপনি শিশুদের প্রোফাইল দেখতে পারেন এবং স্পনসর করতে যেকোনো একটি শিশুকে বেছে নিতে পারেন। একজন স্পনসর হিসেবে আপনি নিয়মিত আপডেট, ছবি এবং স্পনসরকৃত শিশুর চিঠি পাবেন। স্পনসরশিপ প্রতি মাসে ২৫ ডলার থেকে শুরু হয় এবং শিক্ষা, খাবার ও মৌলিক স্বাস্থ্যসেবা কভার করে।',
      category: 'স্পনসরশিপ',
    },
    {
      id: '3',
      question: 'আমার অনুদান কি কর-মুক্ত?',
      answer: 'হ্যাঁ, হোপ ফাউন্ডেশন একটি নিবন্ধিত ৫০১(সি)(৩) অলাভজনক সংস্থা। সমস্ত অনুদান আইন দ্বারা অনুমোদিত সর্বোচ্চ সীমা পর্যন্ত কর-মুক্ত। প্রতিটি অনুদানের জন্য আপনি ইমেলের মাধ্যমে একটি অফিসিয়াল ট্যাক্স রসিদ পাবেন।',
      category: 'অনুদান',
    },
    {
      id: '4',
      question: 'আমি কীভাবে হোপ ফাউন্ডেশনের সাথে স্বেচ্ছাসেবক হতে পারি?',
      answer: 'আমরা স্থানীয় এবং আন্তর্জাতিক উভয় স্বেচ্ছাসেবকদের স্বাগত জানাই। আপনি আমাদের যোগাযোগ পৃষ্ঠার মাধ্যমে আবেদন করতে পারেন বা volunteer@hopefoundation.org এ আমাদের ইমেল করতে পারেন। সুযোগগুলোর মধ্যে রয়েছে শিক্ষাদান, মেন্টরিং, তহবিল সংগ্রহ, ইভেন্ট সমন্বয় এবং ফিল্ড ভিজিট।',
      category: 'স্বেচ্ছাসেবা',
    },
    {
      id: '5',
      question: 'হোপ ফাউন্ডেশন কোথায় কাজ করে?',
      answer: 'আমরা বর্তমানে আফ্রিকা, এশিয়া, দক্ষিণ আমেরিকা এবং পূর্ব ইউরোপের ১২টি দেশে কর্মসূচি পরিচালনা করছি। আমাদের প্রধান কর্মসূচীগুলো কেনিয়া, ভারত, গুয়াতেমালা, নাইজেরিয়া, চীন এবং রোমানিয়াতে অবস্থিত এবং আগামী বছর আরও তিনটি দেশে সম্প্রসারণের পরিকল্পনা রয়েছে।',
      category: 'সাধারণ',
    },
    {
      id: '6',
      question: 'আপনারা কীভাবে স্বচ্ছতা নিশ্চিত করেন?',
      answer: 'আমরা আমাদের ওয়েবসাইটে বার্ষিক প্রতিবেদন, আর্থিক বিবরণী এবং প্রভাব মূল্যায়ন প্রকাশ করি। আমরা বার্ষিকভাবে একটি স্বাধীন ফার্ম দ্বারা নিরীক্ষিত হই এবং চ্যারিটি নেভিগেটরে ৪-স্টার রেটিং বজায় রাখি। দাতারা অনলাইন ড্যাশবোর্ডের মাধ্যমে তাদের অনুদান কীভাবে ব্যবহার হচ্ছে তা ট্র্যাক করতে পারেন।',
      category: 'সাধারণ',
    },
    {
      id: '7',
      question: 'আমি কি মাসিকের পরিবর্তে একবারের অনুদান দিতে পারি?',
      answer: 'অবশ্যই! যদিও মাসিক স্পনসরশিপ আমাদের দীর্ঘমেয়াদী কর্মসূচির পরিকল্পনা করতে সহায়তা করে, তবুও এককালীন অনুদানও সমানভাবে মূল্যবান। আপনি আমাদের দান পৃষ্ঠার মাধ্যমে যেকোনো পরিমাণ অনুদান দিতে পারেন। এককালীন উপহারগুলো প্রায়শই জরুরি প্রয়োজন বা বিশেষ প্রকল্পে নির্দেশিত হয়।',
      category: 'অনুদান',
    },
    {
      id: '8',
      question: 'আমি কীভাবে আমার স্পনসরকৃত শিশু সম্পর্কে আপডেট পাব?',
      answer: 'স্পনসররা ত্রৈমাসিক আপডেট পান যার মধ্যে ছবি, স্কুল রিপোর্ট এবং তাদের স্পনসরকৃত শিশুর হাতে লেখা চিঠি অন্তর্ভুক্ত থাকে। আপনি সরাসরি আমাদের সুরক্ষিত মেসেজিং পোর্টালের মাধ্যমেও যোগাযোগ করতে পারেন। দীর্ঘমেয়াদী স্পনসরদের জন্য বার্ষিক ভিডিও আপডেট প্রদান করা হয়।',
      category: 'স্পনসরশিপ',
    },
  ],
  ar: [
    {
      id: '1',
      question: 'كيف يساعد تبرعي الأطفال؟',
      answer: 'يمول تبرعك بشكل مباشر التعليم والتغذية والرعاية الصحية والإسكان الآمن للأطفال المحتاجين. نحن نخصص ٨٥٪ من كل دولار لبرامجنا لضمان أقصى قدر من الأثر. ويتلقى كل طفل خطة رعاية مخصصة تلبي احتياجاته الفريدة.',
      category: 'التبرعات',
    },
    {
      id: '2',
      question: 'هل يمكنني كفالة طفل معين؟',
      answer: 'نعم! يمكنك تصفح ملفات الأطفال واختيار طفل لكفالته. بصفتك كفيلاً، ستتلقى تحديثات وصوراً ورسائل منتظمة من الطفل الذي تكفله. تبدأ الكفالة من ٢٥ دولاراً شهرياً وتغطي التعليم والوجبات والرعاية الصحية الأساسية.',
      category: 'الكفالة',
    },
    {
      id: '3',
      question: 'هل تبرعي معفى من الضرائب؟',
      answer: 'نعم، مؤسسة الأمل هي منظمة غير ربحية مسجلة بموجب المادة 501(c)(3). جميع التبرعات معفاة من الضرائب إلى أقصى حد يسمح به القانون. ستتلقى إيصالاً ضريبياً رسمياً عبر البريد الإلكتروني لكل تبرع.',
      category: 'التبرعات',
    },
    {
      id: '4',
      question: 'كيف يمكنني التطوع مع مؤسسة الأمل؟',
      answer: 'نرحب بالمتطوعين محلياً ودولياً. يمكنك التقديم من خلال صفحة الاتصال الخاصة بنا أو مراسلتنا عبر البريد الإلكتروني volunteer@hopefoundation.org. تشمل الفرص التدريس، التوجيه، جمع التبرعات، وتنسيق الفعاليات والزيارات الميدانية لمواقع برامجنا.',
      category: 'التطوع',
    },
    {
      id: '5',
      question: 'أين تعمل مؤسسة الأمل؟',
      answer: 'نعمل حالياً على تشغيل البرامج في ١٢ دولة عبر أفريقيا وآسيا وأمريكا الجنوبية وأوروبا الشرقية. تقع مواقع برامجنا الرئيسية في كينيا والهند وغواتيمالا ونيجيريا والصين ورومانيا، مع خطط للتوسع إلى ثلاث دول إضافية العام المقبل.',
      category: 'عام',
    },
    {
      id: '6',
      question: 'كيف تضمنون تحقيق الشفافية؟',
      answer: 'ننشر التقارير السنوية والقوائم المالية وتقييمات الأثر على موقعنا الإلكتروني. يتم تدقيق حساباتنا سنوياً من قبل شركة مستقلة ونحافظ على تقييم ٤ نجوم على موقع Charity Navigator. يمكن للمانحين تتبع كيفية استخدام أموالهم من خلال لوحة التحكم الخاصة بنا.',
      category: 'عام',
    },
    {
      id: '7',
      question: 'هل يمكنني تقديم تبرع لمرة واحدة بدلاً من التبرع الشهري؟',
      answer: 'بالتأكيد! في حين أن الكفالات الشهرية تساعدنا في التخطيط للبرامج طويلة الأجل، فإن التبرعات لمرة واحدة تحظى بنفس القدر من الأهمية والتقدير. يمكنك التبرع بأي مبلغ من خلال صفحة التبرع. وغالباً ما توجه الهدايا المقدمة لمرة واحدة للاحتياجات العاجلة أو المشاريع الخاصة.',
      category: 'التبرعات',
    },
    {
      id: '8',
      question: 'كيف يمكنني تلقي تحديثات حول الطفل الذي أكفله؟',
      answer: 'يتلقى الكفلاء تحديثات ربع سنوية تشمل صوراً وتقارير مدرسية ورسائل مكتوبة بخط اليد من الطفل المكفول. يمكنك أيضاً التواصل مباشرة من خلال بوابة الرسائل الآمنة الخاصة بنا. وتتوفر تحديثات فيديو سنوية للكفلاء على المدى الطويل.',
      category: 'الكفالة',
    },
  ],
};

export const faqs = localizedFAQs.en; // fallback

export function getFAQs(lang: Locale): FAQ[] {
  return localizedFAQs[lang] ?? localizedFAQs.en;
}

export function getFAQsByCategory(category: string, lang: Locale): FAQ[] {
  const list = getFAQs(lang);
  return list.filter((faq) => faq.category === category);
}

export function getFAQCategories(lang: Locale): string[] {
  const list = getFAQs(lang);
  return [...new Set(list.map((faq) => faq.category))];
}
