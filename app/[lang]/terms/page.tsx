import Link from 'next/link';
import Container from '@/components/layout/Container';
import { generatePageMetadata } from '@/lib/metadata';
import { getDictionary, Locale } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return generatePageMetadata({
    title: dict.meta.terms_title,
    description: dict.meta.terms_desc,
    path: `/${lang}/terms`,
  });
}

const getTermsSections = (lang: Locale) => {
  if (lang === 'bn') {
    return [
      {
        title: 'ওয়েবসাইটের ব্যবহার',
        points: [
          'শুধুমাত্র বৈধ এবং সম্মানজনক উদ্দেশ্যে এই সাইটটি ব্যবহার করুন।',
          'ওয়েবসাইট বা এর বিষয়বস্তুর ক্ষতি, ব্যাহত বা অপব্যবহারের চেষ্টা করবেন না।',
          'আমরা প্রয়োজনে ওয়েবসাইটের তথ্য বা পরিষেবা আপডেট বা অপসারণ করতে পারি।',
        ],
      },
      {
        title: 'অনুদান ও সহায়তা',
        points: [
          'সমস্ত অনুদান অনুমোদিত নিরাপদ চ্যানেল বা গেটওয়ের মাধ্যমে প্রক্রিয়া করা হয়।',
          'চেকআউটের সময় প্রদত্ত তথ্যের ভিত্তিতে অনুদানের রসিদ জারি করা হয়।',
          'নির্দিষ্ট কর্মসূচির জন্য দেওয়া অনুদান যথাসম্ভব সেই নির্দিষ্ট উদ্দেশ্যেই ব্যবহার করা হয়।',
        ],
      },
      {
        title: 'মেধা সম্পত্তি',
        points: [
          'ওয়েবসাইটের পাঠ্য, ফটো, লোগো এবং ডিজাইন হোপ ফাউন্ডেশন বা তার অংশীদারদের নিজস্ব সম্পত্তি।',
          'আইন দ্বারা অনুমোদিত না হলে অনুমতি ছাড়া উপকরণগুলো কপি বা পুনরায় ব্যবহার করা যাবে না।',
          'আপনি আমাদের সর্বজনীন পৃষ্ঠাগুলির লিঙ্কগুলি শেয়ার করতে স্বাগত বোধ করবেন।',
        ],
      },
      {
        title: 'পরিবর্তন ও যোগাযোগ',
        points: [
          'আইনি বা কার্যকারী পরিবর্তন প্রতিফলিত করতে আমরা সময় সময় এই শর্তাদি সংশোধন করতে পারি।',
          'সাইটের ক্রমাগত ব্যবহার মানে আপনি বর্তমান সংস্করণের শর্তাবলী মেনে নিয়েছেন।',
          'আপনার কোনো প্রশ্ন থাকলে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।',
        ],
      },
    ];
  } else if (lang === 'ar') {
    return [
      {
        title: 'استخدام الموقع الإلكتروني',
        points: [
          'استخدم هذا الموقع لأغراض قانونية ومحترمة فقط.',
          'لا تحاول إتلاف الموقع أو تعطيله أو إساءة استخدامه أو التلاعب بمحتواه.',
          'يجوز لنا تحديث المحتوى أو إزالته عند الحاجة دون إشعار مسبق.',
        ],
      },
      {
        title: 'التبرعات والدعم',
        points: [
          'يتم معالجة جميع التبرعات من خلال قنوات مشفرة وآمنة معتمدة.',
          'يتم إصدار الإيصالات الضريبية باستخدام المعلومات المقدمة عند إتمام التبرع.',
          'تُستخدم التبرعات المقيدة للغرض المعلن عنه متى كان ذلك ممكناً.',
        ],
      },
      {
        title: 'الملكية الفكرية',
        points: [
          'النصوص والصور والشعارات وعناصر التصميم ملك لمؤسسة الأمل أو شركائها.',
          'لا يجوز لك نسخ المواد أو إعادة استخدامها دون إذن صريح إلا إذا سمح القانون بذلك.',
          'نرحب بمشاركة روابط صفحاتنا العامة ونشرها.',
        ],
      },
      {
        title: 'التغييرات والتواصل',
        points: [
          'قد نقوم بمراجعة هذه الشروط من وقت لآخر لتعكس التغييرات القانونية أو التشغيلية.',
          'استمرارك في استخدام الموقع يعني قبولك للإصدار الحالي من الشروط والأحكام.',
          'يرجى الاتصال بنا إذا كان لديك أي استفسار أو سؤال.',
        ],
      },
    ];
  }
  return [
    {
      title: 'Use of the website',
      points: [
        'Use this site for lawful and respectful purposes only.',
        'Do not try to damage, disrupt, or misuse the website or its content.',
        'We may update or remove content when needed.',
      ],
    },
    {
      title: 'Donations and support',
      points: [
        'All donations are processed through approved secure channels.',
        'Receipts are issued using the information provided at checkout.',
        'Restricted gifts are used for the stated purpose whenever possible.',
      ],
    },
    {
      title: 'Intellectual property',
      points: [
        'Text, photos, logos, and design elements belong to Hope Foundation or its partners.',
        'You may not copy or reuse materials without permission unless allowed by law.',
        'You are welcome to share links to our public pages.',
      ],
    },
    {
      title: 'Changes and contact',
      points: [
        'We may revise these terms from time to time to reflect legal or operational changes.',
        'Your continued use of the site means you accept the current version.',
        'Please contact us if you have any questions.',
      ],
    },
  ];
};

export default async function TermsPage({ params }: PageProps) {
  const { lang } = await params;
  const termsSections = getTermsSections(lang as Locale);

  const toc = termsSections.map((section) => ({
    id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: section.title,
  }));

  const labelLegal = lang === 'ar' ? 'قانوني' : lang === 'bn' ? 'আইনি তথ্য' : 'Legal';
  const labelTitle = lang === 'ar' ? 'الشروط والأحكام' : lang === 'bn' ? 'শর্তাবলী' : 'Terms & Conditions';
  const labelIntro = lang === 'ar'
    ? 'تشرح هذه الشروط كيف يمكن للزوار استخدام موقع مؤسسة الأمل الإلكتروني وما يمكن توقعه عند التبرع أو التفاعل مع خدماتنا.'
    : lang === 'bn'
      ? 'এই শর্তাবলী ব্যাখ্যা করে যে কীভাবে দর্শনার্থীরা হোপ ফাউন্ডেশন ওয়েবসাইট ব্যবহার করতে পারেন এবং অনুদান দেওয়ার সময় বা আমাদের পরিষেবাগুলির সাথে ইন্টারঅ্যাক্ট করার সময় কী আশা করতে পারেন।'
      : 'These terms explain how visitors can use the Hope Foundation website and what to expect when making donations or interacting with our services.';
  
  const labelUpdated = lang === 'ar' ? 'آخر تحديث: ٩ يوليو ٢٠٢٦' : lang === 'bn' ? 'সর্বশেষ আপডেট: ৯ জুলাই, ২০২৬' : 'Last updated: July 9, 2026';
  const labelClear = lang === 'ar' ? 'قواعد استخدام بسيطة' : lang === 'bn' ? 'সহজ ব্যবহারের নিয়ম' : 'Simple usage rules';
  const labelUser = lang === 'ar' ? 'توجيهات التبرع' : lang === 'bn' ? 'অনুদান নির্দেশিকা' : 'Donation guidance';

  const labelQ = lang === 'ar' ? 'هل تحتاج إلى مساعدة؟' : lang === 'bn' ? 'সাহায্য প্রয়োজন?' : 'Need help?';
  const labelQText = lang === 'ar'
    ? 'إذا كان أي شيء هنا غير واضح، يمكن لفريقنا مساعدتك في شرحه وتوضيحه.'
    : lang === 'bn'
      ? 'এখানে যদি কোনো কিছু অস্পষ্ট মনে হয়, তবে আমাদের টিম তা বুঝিয়ে বলতে সাহায্য করতে পারবে।'
      : 'If anything here is unclear, our team can help explain it.';
  const labelCta = lang === 'ar' ? 'اتصل بنا' : lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us';

  return (
    <section className="section">
      <Container>
        <article style={{ maxWidth: 760, margin: '0 auto' }}>
          <header style={{ marginBottom: '2rem' }}>
            <p className="work-hero__label" style={{ marginBottom: '.6rem' }}>
              {labelLegal}
            </p>
            <h1 className="legal-page__title" style={{ marginBottom: '.85rem' }}>
              {labelTitle}
            </h1>
            <p className="legal-page__intro" style={{ maxWidth: 620 }}>
              {labelIntro}
            </p>
            <div className="legal-meta" style={{ marginTop: '1rem' }}>
              <span className="legal-meta__item">{labelUpdated}</span>
              <span className="legal-meta__item">{labelClear}</span>
              <span className="legal-meta__item">{labelUser}</span>
            </div>
          </header>

          <nav className="legal-toc legal-toc--inline" aria-label="Terms table of contents">
            {toc.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="legal-toc__link">
                {item.title}
              </a>
            ))}
          </nav>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--neutral-200)' }}>
            {termsSections.map((section, index) => {
              const id = toc[index].id;

              return (
                <section key={section.title} id={id} className="legal-section">
                  <h2 className="legal-section__title">{section.title}</h2>
                  <ul className="legal-card__list">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <div
            className="legal-card"
            style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <div>
              <p className="legal-card__title">{labelQ}</p>
              <p className="legal-card__text">
                {labelQText}
              </p>
            </div>
            <Link href={`/${lang}/contact`} className="btn btn--outline">
              {labelCta}
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
