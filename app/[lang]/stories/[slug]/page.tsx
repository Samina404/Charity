import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import StoryCard from '@/components/cards/StoryCard';
import { getStoryBySlug, getAllStorySlugs, getStories } from '@/data/stories';
import { formatDate } from '@/lib/utils';
import { generatePageMetadata } from '@/lib/metadata';
import { getDictionary, Locale } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ slug: string; lang: string }>;
}

function renderStoryBody(content: string, lang: string) {
  const blocks = content.split('\n\n');

  return blocks.map((block, index) => {
    const lines = block.split('\n').filter(Boolean);

    const matchesCharityHeader = 
      /What This Story Teaches About Charity/i.test(lines[0]) || 
      /दानশীলতা সম্পর্কে এই গল্পটি যা শেখায়/i.test(lines[0]) || 
      /ماذا تعلمنا هذه القصة عن الصدقة/i.test(lines[0]);

    if (lines.length >= 2 && matchesCharityHeader) {
      return (
        <div key={index} className="prog-action-box" style={{ marginTop: '1.5rem' }}>
          <div className="prog-action-box__header">
            <div className="prog-action-box__icon" aria-hidden="true">
              i
            </div>
            <h2 className="prog-action-box__title">{lines[0]}</h2>
          </div>
          <div className="prog-rich-text">
            <p>{lines.slice(1).join(' ')}</p>
          </div>
        </div>
      );
    }

    if (lines.length > 0 && lines[0].startsWith('"')) {
      return (
        <blockquote
          key={index}
          className="prog-floating-quote"
          style={{ marginTop: '1.5rem', marginBottom: 0 }}
        >
          <div className="prog-floating-quote__mark">{"\""}</div>
          <p className="prog-floating-quote__text">{lines[0]}</p>
          {lines.length > 1 ? (
            <p className="prog-floating-quote__author">{lines.slice(1).join(' ')}</p>
          ) : null}
        </blockquote>
      );
    }

    return <p key={index}>{block}</p>;
  });
}

export async function generateStaticParams() {
  return getAllStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, lang } = await params;
  const story = getStoryBySlug(slug, lang as Locale);
  if (!story) return {};
  return generatePageMetadata({
    title: story.title,
    description: story.excerpt,
    path: `/${lang}/stories/${story.slug}`,
  });
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug, lang } = await params;
  const story = getStoryBySlug(slug, lang as Locale);
  if (!story) notFound();

  const dict = await getDictionary(lang as Locale);
  const relatedStories = getStories(lang as Locale).filter((item) => item.slug !== story.slug).slice(0, 3);

  const isRtl = lang === 'ar';

  const labelStories = lang === 'ar' ? 'قصص الأمل' : lang === 'bn' ? 'আশার গল্প' : 'Stories of Hope';
  const labelTheme = lang === 'ar' ? 'موضوع القصة' : lang === 'bn' ? 'গল্পের মূল থিম' : 'Story theme';
  const labelPublished = lang === 'ar' ? 'تاريخ النشر' : lang === 'bn' ? 'প্রকাশিত' : 'Published';
  const labelFocus = lang === 'ar' ? 'تركيز الأسرة' : lang === 'bn' ? 'পারিবারিক ফোকাস' : 'Household focus';
  const sidebarQuote = lang === 'ar'
    ? 'تصل الصدقة لغايتها الأسمى عندما تأتي في الوقت المناسب.'
    : lang === 'bn'
      ? 'সঠিক সময়ে সাহায্য পৌঁছালে দানশীলতা তার সবচেয়ে অর্থপূর্ণ রূপ নেয়।'
      : 'Charity reaches its most meaningful form when it arrives at the right moment.';
  const sidebarQuoteAuthor = lang === 'ar' ? 'أرشيف قصص مؤسسة الأمل' : lang === 'bn' ? 'হোপ ফাউন্ডেশন গল্প আর্কাইভ' : 'Hope Foundation story archive';
  const bannerTitle = lang === 'ar' ? 'ساعد في كتابة القصة القادمة' : lang === 'bn' ? 'পরবর্তী গল্পটি লিখতে সাহায্য করুন' : 'Help write the next story';
  const bannerDesc = lang === 'ar'
    ? 'دعمك يمكن أن ينقل أسرة من البقاء إلى الاستقرار، ومن الاستقرار إلى الأمل.'
    : lang === 'bn'
      ? 'আপনার সমর্থন একটি পরিবারকে কেবল বেঁচে থাকা থেকে স্থিতিশীলতায় এবং স্থিতিশীলতা থেকে আশার আলোতে নিয়ে যেতে পারে।'
      : 'Your support can move a family from survival to stability, and from stability to hope.';
  const bannerBtnDonate = lang === 'ar' ? 'تبرع الآن' : lang === 'bn' ? 'এখনই দান করুন' : 'Donate Now';
  const bannerBtnBack = lang === 'ar' ? 'العودة إلى القصص' : lang === 'bn' ? 'গল্পগুলোতে ফিরে যান' : 'Back to Stories';
  const relatedHeading = lang === 'ar' ? 'قصص أخرى' : lang === 'bn' ? 'আরও গল্প' : 'More Stories';

  return (
    <>
      <section className="prog-hero" aria-label={`${story.title} hero`}>
        <div className="prog-hero__media">
          <Image
            src={story.image}
            alt={story.title}
            fill
            priority
            className="prog-hero__img"
            sizes="100vw"
            quality={85}
          />
          <div className="prog-hero__overlay" />
        </div>
        <Container className="prog-hero__content">
          <div className="prog-hero__eyebrow">{labelStories}</div>
          <h1 className="prog-hero__title">{story.title}</h1>
          <p className="prog-hero__tagline">{story.excerpt}</p>
        </Container>
      </section>

      {/* ── Stats Strip ─────────────────────────────────── */}
      <div style={{ background: 'var(--neutral-100)', borderTop: '1px solid var(--neutral-200)', borderBottom: '1px solid var(--neutral-200)', paddingBlock: '2rem' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gold-600)', lineHeight: 1 }}>{story.category}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{labelTheme}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gold-600)', lineHeight: 1 }}>{formatDate(story.date)}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{labelPublished}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gold-600)', lineHeight: 1 }}>{story.childName}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{labelFocus}</span>
            </div>
          </div>
        </Container>
      </div>

      <section className="section">
        <Container>
          <div className="prog-grid">
            <div className="prog-grid__narrative">
              <p className="prog-lead-intro">{story.excerpt}</p>
              <div className="prog-rich-text">{renderStoryBody(story.content, lang)}</div>
            </div>

            <div className="prog-grid__media-col">
              <div className="prog-sticky-media">
                <div className="prog-media-wrap">
                  <Image
                     src={story.image}
                     alt={story.title}
                     width={520}
                     height={380}
                     className="prog-media-wrap__img"
                     sizes="(max-width: 1024px) 100vw, 520px"
                     quality={85}
                   />
                </div>
                <div className="prog-floating-quote">
                  <div className="prog-floating-quote__mark" style={{ [isRtl ? 'right' : 'left']: '15px' }}>{"\""}</div>
                  <p className="prog-floating-quote__text" style={{ [isRtl ? 'paddingRight' : 'paddingLeft']: '1.5rem' }}>
                    {sidebarQuote}
                  </p>
                  <p className="prog-floating-quote__author" style={{ textAlign: isRtl ? 'left' : 'right' }}>{sidebarQuoteAuthor}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--accent" style={{ paddingBlock: '4rem' }}>
        <Container>
          <div className="prog-cta-banner">
            <h2 className="prog-cta-banner__title">{bannerTitle}</h2>
            <p className="prog-cta-banner__desc">
              {bannerDesc}
            </p>
            <div className="prog-cta-banner__actions">
              <Link href={`/${lang}/donate`} className="btn btn--primary btn--lg">
                {bannerBtnDonate}
              </Link>
              <Link href={`/${lang}/stories`} className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                {bannerBtnBack}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <h2 className="prog-related__heading">{relatedHeading}</h2>
          <div className="prog-related__grid">
            {relatedStories.map((related) => (
              <StoryCard key={related.id} story={related} lang={lang as Locale} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
