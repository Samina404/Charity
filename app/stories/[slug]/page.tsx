import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import StoryCard from '@/components/cards/StoryCard';
import { stories, getStoryBySlug, getAllStorySlugs } from '@/data/stories';
import { formatDate } from '@/lib/utils';
import { generatePageMetadata } from '@/lib/metadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function renderStoryBody(content: string) {
  const blocks = content.split('\n\n');

  return blocks.map((block, index) => {
    const lines = block.split('\n').filter(Boolean);

    if (lines.length >= 2 && /What This Story Teaches About Charity/i.test(lines[0])) {
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
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  return generatePageMetadata({
    title: story.title,
    description: story.excerpt,
    path: `/stories/${story.slug}`,
  });
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const relatedStories = stories.filter((item) => item.slug !== story.slug).slice(0, 3);

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
          <div className="prog-hero__eyebrow">Stories of Hope</div>
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
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Story theme</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gold-600)', lineHeight: 1 }}>{formatDate(story.date)}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Published</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--gold-600)', lineHeight: 1 }}>{story.childName}</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Household focus</span>
            </div>
          </div>
        </Container>
      </div>

      <section className="section">
        <Container>
          <div className="prog-grid">
            <div className="prog-grid__narrative">
              <p className="prog-lead-intro">{story.excerpt}</p>
              <div className="prog-rich-text">{renderStoryBody(story.content)}</div>
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
                  <div className="prog-floating-quote__mark">{"\""}</div>
                  <p className="prog-floating-quote__text">
                    Charity reaches its most meaningful form when it arrives at the right moment.
                  </p>
                  <p className="prog-floating-quote__author">Hope Foundation story archive</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--accent" style={{ paddingBlock: '4rem' }}>
        <Container>
          <div className="prog-cta-banner">
            <h2 className="prog-cta-banner__title">Help write the next story</h2>
            <p className="prog-cta-banner__desc">
              Your support can move a family from survival to stability, and from stability to hope.
            </p>
            <div className="prog-cta-banner__actions">
              <Link href="/donate" className="btn btn--primary btn--lg">
                Donate Now
              </Link>
              <Link href="/stories" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                Back to Stories
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <h2 className="prog-related__heading">More Stories</h2>
          <div className="prog-related__grid">
            {relatedStories.map((related) => (
              <StoryCard key={related.id} story={related} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
