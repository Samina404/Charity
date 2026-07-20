import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { getPrograms } from '@/data/programs';
import { generatePageMetadata } from '@/lib/metadata';
import { Ear, Users, BarChart3, RefreshCw, CheckCircle2, GraduationCap, Utensils, Home } from 'lucide-react';
import { IMAGES } from '@/lib/images';
import { getDictionary, Locale } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return generatePageMetadata({
    title: dict.meta.our_work_title,
    description: dict.meta.our_work_desc,
    path: `/${lang}/our-work`,
  });
}

// Localized Approach Data
const getApproachData = (lang: Locale) => {
  if (lang === 'bn') {
    return [
      {
        icon: Ear,
        title: 'আমরা আগে শুনি',
        desc: 'আমরা কাজ করার আগে জিজ্ঞাসা করি। শিশু, পরিবার এবং সম্প্রদায়ের নেতারা আমাদের প্রতিটি কর্মসূচির পথ দেখান।',
        iconBg: '#fffbeb',
        iconColor: '#b45309',
      },
      {
        icon: Users,
        title: 'আমরা স্থানীয়ভাবে অংশীদারি করি',
        desc: 'আমরা স্থানীয় সংস্থা, সরকার এবং স্বেচ্ছাসেবকদের সাথে হাত মিলিয়ে কাজ করি - কখনো বাইরের সমাধান চাপিয়ে দিই না।',
        iconBg: '#f4f4f5',
        iconColor: '#18181b',
      },
      {
        icon: BarChart3,
        title: 'আমরা প্রভাব পরিমাপ করি',
        desc: 'প্রতিটি উদ্যোগ ফলাফলের বিপরীতে ট্র্যাক করা হয়। সংগৃহীত প্রতি ডলারের ৮৫ পয়সা সরাসরি কার্যক্রমে যায়।',
        iconBg: '#fffbeb',
        iconColor: '#b45309',
      },
      {
        icon: RefreshCw,
        title: 'আমরা খাপ খাইয়ে নিই ও উন্নত করি',
        desc: 'পরিস্থিতি পরিবর্তিত হয়। আমরা তথ্য এবং যাদের আমরা সেবা করি তাদের মতামতের ভিত্তিতে ক্রমাগত আমাদের পদ্ধতি উন্নত করি।',
        iconBg: '#f4f4f5',
        iconColor: '#18181b',
      },
    ];
  } else if (lang === 'ar') {
    return [
      {
        icon: Ear,
        title: 'نحن نستمع أولاً',
        desc: 'قبل أن نتصرف، نسأل أولاً. يوجه الأطفال والعائلات وقادة المجتمع كل برنامج نقوم ببنائه.',
        iconBg: '#fffbeb',
        iconColor: '#b45309',
      },
      {
        icon: Users,
        title: 'نحن نشارك محلياً',
        desc: 'نحن نعمل جنباً إلى جنب مع المنظمات المحلية والحكومات والمتطوعين - ولا نفرض حلولاً خارجية أبداً.',
        iconBg: '#f4f4f5',
        iconColor: '#18181b',
      },
      {
        icon: BarChart3,
        title: 'نحن نقيس الأثر',
        desc: 'يتم تتبع كل مبادرة مقابل النتائج. يذهب ٨٥ سنتاً من كل دولار مباشرة للبرامج الميدانية.',
        iconBg: '#fffbeb',
        iconColor: '#b45309',
      },
      {
        icon: RefreshCw,
        title: 'نحن نتكيف ونتطور',
        desc: 'تتغير الظروف باستمرار. نحن نطور أساليبنا بشكل مستمر، مسترشدين بالبيانات وأصوات أولئك الذين نخدمهم.',
        iconBg: '#f4f4f5',
        iconColor: '#18181b',
      },
    ];
  }
  return [
    {
      icon: Ear,
      title: 'We Listen First',
      desc: 'Before we act, we ask. Children, families, and community leaders guide every program we build.',
      iconBg: '#fffbeb',
      iconColor: '#b45309',
    },
    {
      icon: Users,
      title: 'We Partner Locally',
      desc: 'We work hand-in-hand with local organisations, governments, and volunteers - never imposing outside solutions.',
      iconBg: '#f4f4f5',
      iconColor: '#18181b',
    },
    {
      icon: BarChart3,
      title: 'We Measure Impact',
      desc: 'Every initiative is tracked against outcomes. 85 cents of every dollar goes directly to programs.',
      iconBg: '#fffbeb',
      iconColor: '#b45309',
    },
    {
      icon: RefreshCw,
      title: 'We Adapt & Improve',
      desc: 'Circumstances change. We evolve our methods constantly, driven by data and the voices of those we serve.',
      iconBg: '#f4f4f5',
      iconColor: '#18181b',
    },
  ];
};

export default async function OurWorkPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.our_work;
  const programs = getPrograms(lang as Locale);
  const approach = getApproachData(lang as Locale);

  const isRtl = lang === 'ar';

  const titleMethodology = lang === 'ar' ? 'منهجيتنا' : lang === 'bn' ? 'আমাদের কার্যপদ্ধতি' : 'Our Methodology';
  const headingMethodology = lang === 'ar' ? 'نهج حقوق الطفل' : lang === 'bn' ? 'শিশু অধিকার ভিত্তিক দৃষ্টিভঙ্গি' : 'A Child-Rights Approach';
  const descMethodology = lang === 'ar' 
    ? 'منذ تأسيسنا ونحن ملتزمون بضمان الاعتراف بحقوق الأطفال على كافة المستويات - من المجتمعات المحلية إلى السياسة الدولية. نحن نعزز التغيير من القاعدة إلى القمة، ونشرك الأطفال وعائلاتهم ومجتمعاتهم. نحن نعمل مع الحكومات والمنظمات المحلية لضمان وضع حقوقهم على جدول الأعمال.'
    : lang === 'bn'
      ? 'আমাদের প্রতিষ্ঠার পর থেকেই আমরা শিশুদের অধিকার প্রতিটি স্তরে — স্থানীয় সম্প্রদায় থেকে শুরু করে আন্তর্জাতিক নীতি পর্যন্ত — স্বীকৃত তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। আমরা তৃণমূল থেকে পরিবর্তনের প্রসার ঘটাই, যেখানে শিশু, তাদের পরিবার এবং তাদের সম্প্রদায়কে সম্পৃক্ত করা হয়। অধিকার রক্ষায় তাদের এজেন্ডা বাস্তবায়নে আমরা স্থানীয় সরকার এবং সংস্থাগুলোর সাথে যৌথভাবে কাজ করি।'
      : 'Since our founding we have been committed to ensuring children\'s rights are recognised at every level - from local communities to international policy. We promote change from the ground up, engaging children, their families, and their communities. Together we work with local governments and organisations to ensure their rights are on the agenda.';

  const ctaSupport = lang === 'ar' ? 'ادعم أعمالنا' : lang === 'bn' ? 'আমাদের কাজ সমর্থন করুন' : 'Support Our Work';
  const ctaStories = lang === 'ar' ? 'قراءة قصص النجاح' : lang === 'bn' ? 'সাফল্যের গল্পগুলো পড়ুন' : 'Read Success Stories';

  const labelEdu = lang === 'ar' ? 'التعليم أولاً' : lang === 'bn' ? 'শিক্ষা প্রথম' : 'Education First';
  const subEdu = lang === 'ar' ? 'المدارس والدعم الدراسي' : lang === 'bn' ? 'ক্লাসরুম ও সহায়তা' : 'Classrooms & support';
  const labelNut = lang === 'ar' ? 'التغذية اليومية' : lang === 'bn' ? 'দৈনিক পুষ্টি' : 'Daily Nutrition';
  const subNut = lang === 'ar' ? 'وجبات ساخنة وصحية' : lang === 'bn' ? 'স্বাস্থ্যকর গরম খাবার' : 'Healthy hot meals';
  const labelShe = lang === 'ar' ? 'المأوى الآمن' : lang === 'bn' ? 'নিরাপদ আশ্রয়' : 'Safe Shelter';
  const subShe = lang === 'ar' ? 'استقرار وأمان السكن' : lang === 'bn' ? 'স্থিতিশীল আবাসন নিরাপত্তা' : 'Stable housing security';

  const missionHeading = lang === 'ar'
    ? 'نصل إلى زوايا نائية، وقرى، ومدن حيث يكون من الصعب جداً أن تكون طفلاً هناك.'
    : lang === 'bn'
      ? 'আমরা দূরবর্তী প্রান্তরে, গ্রামে এবং শহরগুলোতে যাই যেখানে শিশু হিসেবে বেঁচে থাকা সত্যিই কঠিন।'
      : 'We go to remote corners, villages, and cities where it\'s really tough to be a child.';
  const missionBody = lang === 'ar'
    ? 'نحن نسأل الأطفال وعائلاتهم ومجتمعاتهم عما يحتاجون إليه ليكونوا أصحاء وآمنين ومتعلمين. نحن نستمع إلى تجاربهم ورؤاهم وأفكارهم.'
    : lang === 'bn'
      ? 'আমরা শিশু, তাদের পরিবার এবং সম্প্রদায়কে জিজ্ঞাসা করি যে তাদের সুস্থ, নিরাপদ এবং শিক্ষিত থাকার জন্য কী প্রয়োজন। আমরা তাদের অভিজ্ঞতা, তাদের অন্তর্দৃষ্টি এবং তাদের ধারণার কথা শুনি।'
      : 'We ask children, their families, and communities what they need to be healthy, safe, and learning. We listen to their experiences, their insights, and their ideas.';
  const missionHighlight = lang === 'ar'
    ? 'معاً، نعمل يداً بيد للتكيف وخلق حلول جديدة للأطفال الذين يواجهون الصعاب - الآن وفي المستقبل.'
    : lang === 'bn'
      ? 'একত্রে, আমরা কঠিন পরিস্থিতির সম্মুখীন শিশুদের জন্য নতুন সমাধান তৈরি করতে ও তা খাপ খাইয়ে নিতে কাঁধে কাঁধ মিলিয়ে কাজ করি - বর্তমানে এবং ভবিষ্যতে।'
      : 'Together, we work hand in hand to adapt and create new solutions for children facing hardship - now and in the future.';

  const programAreaLabel = lang === 'ar' ? 'برنامج العمل' : lang === 'bn' ? 'কার্যক্রম এলাকা' : 'Program Area';

  return (
    <>
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="work-hero section" aria-label="What We Do hero" style={{ paddingBlock: '4.5rem 3rem', overflow: 'hidden' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="program-row">
            {/* Left Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="work-hero__label">{t.label}</div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}>
                {t.title}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                {t.sub}
              </p>
              
              {/* Feature Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                    <GraduationCap size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700' }}>{labelEdu}</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{subEdu}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                    <Utensils size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700' }}>{labelNut}</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{subNut}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                    <Home size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700' }}>{labelShe}</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{subShe}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Overlapping Dual Image Stack */}
            <div style={{ position: 'relative', width: '100%', height: '420px' }}>
              {/* Background Glow */}
              <div style={{ position: 'absolute', right: '-10%', top: '-10%', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%)', zIndex: 0 }} />
              
              {/* Main Image */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '85%', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--neutral-200)', zIndex: 1 }}>
                <Image
                  src={IMAGES.whatWeDoBg}
                  alt="Children collaborating"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
              </div>

              {/* Offset Overlapping Image */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '45%', height: '55%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '4px solid #fff', zIndex: 2 }}>
                <Image
                  src={IMAGES.ourWorkHeroSub}
                  alt="Hope Foundation community focus"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Mission Callout ─────────────────────────────── */}
      <section className="work-mission section">
        <Container>
          <div className="work-mission__inner">
            <div className="work-mission__accent" aria-hidden="true" />
            <div className="work-mission__text">
              <h2 className="work-mission__title">
                {missionHeading}
              </h2>
              <p className="work-mission__body">
                {missionBody}
              </p>
              <p className="work-mission__body work-mission__body--highlight">
                {missionHighlight}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Staggered Programs Showcase ────────────────── */}
      <section className="section" style={{ background: 'var(--neutral-100)', borderTop: '1px solid var(--neutral-200)' }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {programs.map((prog, idx) => {
              const isEven = idx % 2 === 0;
              const colOrderImage = isRtl ? (isEven ? 2 : 1) : (isEven ? 1 : 2);
              const colOrderCopy = isRtl ? (isEven ? 1 : 2) : (isEven ? 2 : 1);

              return (
                <div 
                  key={prog.id} 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '3rem',
                    alignItems: 'center',
                  }}
                  className="program-row"
                >
                  {/* Image Column */}
                  <div 
                    style={{
                      order: colOrderImage,
                      position: 'relative',
                      aspectRatio: '16/10',
                      borderRadius: 'var(--radius-xl)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)',
                      border: '1px solid var(--neutral-200)',
                    }}
                    className="program-row__image-wrap"
                  >
                    <Image
                      src={prog.image}
                      alt={prog.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      quality={85}
                    />
                  </div>

                  {/* Copy Column */}
                  <div 
                    style={{
                      order: colOrderCopy,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.25rem',
                    }}
                    className="program-row__copy"
                  >
                    <span 
                      style={{
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        fontWeight: '800',
                        color: 'var(--gold-700)',
                        background: 'var(--gold-100)',
                        padding: '0.35rem 0.95rem',
                        borderRadius: '999px',
                        width: 'fit-content',
                      }}
                    >
                      {programAreaLabel} {isRtl ? '٠' : '0'}{idx + 1}
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', lineHeight: '1.15' }}>
                      {prog.label}
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--gold-600)', fontStyle: 'italic', fontWeight: '500' }}>
                      &ldquo;{prog.tagline}&rdquo;
                    </p>
                    <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: '1.75' }}>
                      {prog.intro}
                    </p>
                    
                    {/* Top Activities Preview */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBlock: '0.5rem' }}>
                      {prog.activities.slice(0, 3).map((act, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <CheckCircle2 size={18} className="text-[var(--gold-500)] flex-shrink-0" style={{ marginTop: '0.15rem' }} />
                          <span style={{ fontSize: '0.925rem', color: 'var(--text)', lineHeight: '1.5' }}>{act}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '0.75rem' }}>
                      <Link href={`/${lang}/our-work/${prog.id}`} className="btn btn--outline btn--lg">
                        {lang === 'ar' ? `استكشف تفاصيل ${prog.label} ←` : lang === 'bn' ? `${prog.label} এর বিস্তারিত দেখুন ←` : `Explore ${prog.label} Details →`}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Methodology Section ─────────────────────────── */}
      <section className="section">
        <Container>
          <div className="approach-hdr">
            <p className="approach-hdr__eyebrow">{titleMethodology}</p>
            <h2 className="approach-hdr__title">{headingMethodology}</h2>
            <p className="approach-hdr__desc">
              {descMethodology}
            </p>
          </div>

          <div className="approach-grid">
            {approach.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="approach-card">
                  <div className="approach-card__top">
                    <div
                      className="approach-card__icon"
                      style={{ background: item.iconBg, color: item.iconColor }}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <span className="approach-card__num">0{idx + 1}</span>
                  </div>
                  <h3 className="approach-card__title">{item.title}</h3>
                  <p className="approach-card__desc">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="approach-cta">
            <Link href={`/${lang}/donate`} className="btn btn--primary btn--lg">
              {ctaSupport}
            </Link>
            <Link href={`/${lang}/stories`} className="btn btn--outline btn--lg">
              {ctaStories}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
