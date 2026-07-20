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
    title: dict.meta.privacy_title,
    description: dict.meta.privacy_desc,
    path: `/${lang}/privacy`,
  });
}

const getPrivacySections = (lang: Locale) => {
  if (lang === 'bn') {
    return [
      {
        title: 'তথ্য সংগ্রহ',
        points: [
          'ফর্ম, অনুদান, ইমেল বা ফোন যোগাযোগের মাধ্যমে আপনি যে তথ্য শেয়ার করেন তা আমরা সংগ্রহ করতে পারি।',
          'আমরা পৃষ্ঠায় ভিজিট এবং ডিভাইসের তথ্যের মতো মৌলিক ব্যবহার ডেটাও সংগ্রহ করতে পারি।',
          'আমরা শুধুমাত্র আমাদের সাইট পরিচালনা করতে এবং মিশন সমর্থন করতে প্রয়োজনীয় তথ্য সংগ্রহ করি।',
        ],
      },
      {
        title: 'তথ্যের ব্যবহার',
        points: [
          'আমরা অনুদান প্রক্রিয়া করতে, জিজ্ঞাসার উত্তর দিতে এবং সেবা উন্নত করতে তথ্য ব্যবহার করি।',
          'আমরা অনুদানের রসিদ, সেবা আপডেট বা দাতব্য সংক্রান্ত যোগাযোগ পাঠাতে পারি।',
          'আমরা তৃতীয় পক্ষের কাছে ব্যক্তিগত তথ্য বিক্রি করি না।',
        ],
      },
      {
        title: 'অংশীদারি ও সুরক্ষা',
        points: [
          'আমরা বিশ্বস্ত সেবা প্রদানকারীদের সাথে ডেটা শেয়ার করতে পারি যারা আমাদের নিরাপদে পরিচালনা করতে সহায়তা করে।',
          'অননুমোদিত অ্যাক্সেস থেকে তথ্য রক্ষা করতে আমরা যুক্তিযুক্ত সুরক্ষা ব্যবস্থা ব্যবহার করি।',
          'আইন দ্বারা প্রয়োজনীয় হলে, আমরা আইনি বাধ্যবাধকতা মেনে চলার জন্য তথ্য প্রকাশ করতে পারি।',
        ],
      },
      {
        title: 'আপনার পছন্দসমূহ',
        points: [
          'আপনার বিবরণ আপডেট করতে বা আপনার তথ্য সম্পর্কে প্রশ্ন জিজ্ঞাসা করতে আমাদের সাথে যোগাযোগ করতে পারেন।',
          'প্রযোজ্য ক্ষেত্রে আপনি অ-প্রয়োজনীয় যোগাযোগ থেকে অপ্ট-আউট করতে পারেন।',
          'আমাদের অনুশীলন পরিবর্তিত হলে, আমরা সেই অনুযায়ী এই পৃষ্ঠাটি আপডেট করব।',
        ],
      },
    ];
  } else if (lang === 'ar') {
    return [
      {
        title: 'المعلومات التي نجمعها',
        points: [
          'قد نجمع التفاصيل التي تشاركها معنا من خلال النماذج، أو التبرعات، أو البريد الإلكتروني، أو الاتصال الهاتفي.',
          'قد نجمع أيضاً بيانات الاستخدام الأساسية مثل زيارات الصفحات ومعلومات الجهاز.',
          'نحن نجمع فقط ما نحتاجه لتشغيل الموقع ودعم رسالتنا الإنسانية.',
        ],
      },
      {
        title: 'كيف نستخدم المعلومات',
        points: [
          'نستخدم المعلومات لمعالجة التبرعات، والرد على الاستفسارات، وتحسين الخدمات.',
          'قد نرسل إيصالات التبرع، أو تحديثات الخدمة، أو المراسلات المتعلقة بالعمل الخيري.',
          'نحن لا نبيع المعلومات الشخصية لأطراف ثالثة.',
        ],
      },
      {
        title: 'المشاركة والحماية',
        points: [
          'قد نشارك البيانات مع مقدمي الخدمات الموثوق بهم الذين يساعدوننا في العمل بأمان.',
          'نحن نستخدم ضمانات معقولة لحماية المعلومات من الوصول غير المصرح به.',
          'إذا لزم الأمر بموجب القانون، قد نكشف عن المعلومات للامتثال للالتزامات القانونية.',
        ],
      },
      {
        title: 'خياراتك وحقوقك',
        points: [
          'يمكنك الاتصال بنا لتحديث تفاصيلك أو طرح أسئلة حول معلوماتك الشخصية.',
          'يجوز لك إلغاء الاشتراك في الاتصالات غير الأساسية عند الاقتضاء.',
          'إذا تغيرت ممارساتنا، فسنقوم بتحديث هذه الصفحة وفقاً لذلك.',
        ],
      },
    ];
  }
  return [
    {
      title: 'Information we collect',
      points: [
        'We may collect details you share through forms, donations, email, or phone contact.',
        'We may also collect basic usage data such as page visits and device information.',
        'We only collect what we need to operate the site and support our mission.',
      ],
    },
    {
      title: 'How we use information',
      points: [
        'We use information to process donations, respond to inquiries, and improve services.',
        'We may send donation receipts, service updates, or charity-related communications.',
        'We do not sell personal information to third parties.',
      ],
    },
    {
      title: 'Sharing and protection',
      points: [
        'We may share data with trusted service providers who help us operate securely.',
        'We use reasonable safeguards to protect information from unauthorized access.',
        'If required by law, we may disclose information to comply with legal obligations.',
      ],
    },
    {
      title: 'Your choices',
      points: [
        'You can contact us to update your details or ask questions about your information.',
        'You may opt out of non-essential communications when applicable.',
        'If our practices change, we will update this page accordingly.',
      ],
    },
  ];
};

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  const privacySections = getPrivacySections(lang as Locale);

  const toc = privacySections.map((section) => ({
    id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: section.title,
  }));

  const labelLegal = lang === 'ar' ? 'قانوني' : lang === 'bn' ? 'আইনি তথ্য' : 'Legal';
  const labelTitle = lang === 'ar' ? 'سياسة الخصوصية' : lang === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy';
  const labelIntro = lang === 'ar'
    ? 'تشرح هذه الصفحة كيف تتعامل مؤسسة الأمل مع معلومات الزوار والمتبرعين والداعمين.'
    : lang === 'bn'
      ? 'এই পৃষ্ঠাটি ব্যাখ্যা করে যে কীভাবে হোপ ফাউন্ডেশন দর্শনার্থী, দাতা এবং সমর্থকদের তথ্য পরিচালনা করে।'
      : 'This page explains how Hope Foundation handles information from visitors, donors, and supporters.';
  
  const labelUpdated = lang === 'ar' ? 'آخر تحديث: ٩ يوليو ٢٠٢٦' : lang === 'bn' ? 'সর্বশেষ আপডেট: ৯ জুলাই, ২০২৬' : 'Last updated: July 9, 2026';
  const labelClear = lang === 'ar' ? 'ممارسات بيانات واضحة' : lang === 'bn' ? 'স্বচ্ছ ডেটা অনুশীলন' : 'Clear data practices';
  const labelUser = lang === 'ar' ? 'خصوصية المستخدم أولاً' : lang === 'bn' ? 'ব্যবহারকারীর গোপনীয়তা সবার আগে' : 'User privacy first';

  const labelQ = lang === 'ar' ? 'لديك أسئلة؟' : lang === 'bn' ? 'কোনো প্রশ্ন?' : 'Questions?';
  const labelQText = lang === 'ar'
    ? 'إذا كنت ترغب في فهم كيفية التعامل مع معلوماتك، يسعدنا تقديم المساعدة.'
    : lang === 'bn'
      ? 'আপনি যদি বুঝতে চান কীভাবে আপনার তথ্য পরিচালনা করা হয়, আমরা সাহায্য করতে পেরে খুশি।'
      : 'If you want to understand how your information is handled, we\'re happy to help.';
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

          <nav className="legal-toc legal-toc--inline" aria-label="Privacy table of contents">
            {toc.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="legal-toc__link">
                {item.title}
              </a>
            ))}
          </nav>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--neutral-200)' }}>
            {privacySections.map((section, index) => {
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
