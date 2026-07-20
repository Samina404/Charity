import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { getProgramById, getAllProgramIds, programDetails } from '@/data/programs';
import { generatePageMetadata } from '@/lib/metadata';
import { HeartHandshake, CheckCircle2, ChevronLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ program: string }>;
}

export async function generateStaticParams() {
  return getAllProgramIds().map((id) => ({ program: id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { program } = await params;
  const prog = getProgramById(program);
  if (!prog) return {};
  return generatePageMetadata({
    title: prog.label,
    description: prog.intro,
    path: `/our-work/${prog.id}`,
  });
}

export default async function ProgramPage({ params }: PageProps) {
  const { program } = await params;
  const prog = getProgramById(program);
  if (!prog) notFound();

  /* ── Related programs (other 5) ── */
  const related = programDetails.filter((p) => p.id !== prog.id).slice(0, 3);

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────── */}
      <section className="work-hero section" aria-label={`${prog.label} hero`} style={{ paddingBlock: '4.5rem 3rem', overflow: 'hidden' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="program-row">
            {/* Left Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="work-hero__label">Program Focus Area</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em' }}>
                {prog.label}
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--gold-600)', fontStyle: 'italic', fontWeight: '500' }}>
                &ldquo;{prog.tagline}&rdquo;
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                {prog.intro}
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <Link href="#details" className="btn btn--primary btn--lg">
                  View Program Deliverables
                </Link>
              </div>
            </div>

            {/* Right Image Frame */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/11', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--neutral-200)' }}>
              <Image
                src={prog.image}
                alt={prog.imageAlt}
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={85}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats Strip ─────────────────────────────────── */}
      <div style={{ background: 'var(--neutral-100)', borderTop: '1px solid var(--neutral-200)', borderBottom: '1px solid var(--neutral-200)', paddingBlock: '2.5rem' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {prog.stats.map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--gold-600)', lineHeight: 1 }}>{s.value}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Main Details Section ───────────────────────── */}
      <section className="section" id="details">
        <Container>
          <div className="prog-grid">
            {/* Left: Narrative & Deliverables */}
            <div className="prog-grid__narrative" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>Overview &amp; Strategy</h2>
                <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8 }}>{prog.body}</p>
              </div>

              {/* What We Do Deliverables */}
              <div className="prog-action-box" style={{ background: 'var(--neutral-50)', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--neutral-200)' }}>
                <div className="prog-action-box__header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <HeartHandshake className="text-[var(--gold-600)]" size={24} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Key Program Deliverables</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  {prog.activities.map((act) => (
                    <div key={act} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 className="text-[var(--gold-500)] flex-shrink-0" size={18} style={{ marginTop: '0.15rem' }} />
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{act}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Quote Card */}
            <div className="prog-grid__media-col">
              <div className="prog-sticky-media" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="prog-floating-quote" style={{ background: 'var(--bg)', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                  <div className="prog-floating-quote__mark" style={{ color: 'var(--gold-200)', fontSize: '4rem', position: 'absolute', top: '10px', left: '15px', lineHeight: 1 }}>&ldquo;</div>
                  <p className="prog-floating-quote__text" style={{ fontSize: '1.05rem', color: 'var(--text)', fontStyle: 'italic', position: 'relative', zIndex: 1, paddingLeft: '1.5rem', lineHeight: 1.75 }}>
                    Every child we reach reminds us why this work matters. The change we see in communities is what drives us forward.
                  </p>
                  <p className="prog-floating-quote__author" style={{ textAlign: 'right', fontWeight: '700', color: 'var(--gold-600)', marginTop: '1rem', fontSize: '0.9rem' }}>— Hope Foundation Team</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA Banner ────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--neutral-100)', borderTop: '1px solid var(--neutral-200)', borderBottom: '1px solid var(--neutral-200)', paddingBlock: '4rem' }}>
        <Container>
          <div className="prog-cta-banner" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '680px' }}>
            <h2 className="prog-cta-banner__title" style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text)' }}>Make a difference in {prog.label}</h2>
            <p className="prog-cta-banner__desc" style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              Your donation directly funds this program — reaching more children, every month.
            </p>
            <div className="prog-cta-banner__actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
              <Link href="/donate" className="btn btn--primary btn--lg">Donate Now</Link>
              <Link href="/stories" className="btn btn--outline btn--lg">Read Impact Stories</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Related Programs ────────────────────────────── */}
      <section className="section section--alt">
        <Container>
          <h2 className="prog-related__heading" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '2.5rem' }}>Explore Our Other Programs</h2>
          <div className="prog-related__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {related.map((rel) => (
              <Link 
                key={rel.id} 
                href={`/our-work/${rel.id}`} 
                className="work-program-card" 
                style={{ 
                  position: 'relative', 
                  minHeight: '260px', 
                  borderRadius: 'var(--radius-xl)', 
                  overflow: 'hidden', 
                  display: 'flex', 
                  alignItems: 'flex-end', 
                  padding: '1.5rem', 
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <Image
                  src={rel.image}
                  alt={rel.label}
                  fill
                  style={{ objectFit: 'cover', zIndex: 0 }}
                  className="work-program-card__img"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={80}
                />
                {/* Dark readable overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 14, 28, 0.95) 0%, rgba(10, 14, 28, 0.4) 60%, rgba(10, 14, 28, 0.1) 100%)', zIndex: 1 }} />
                
                {/* Content Overlay */}
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.35rem', width: '100%' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '800', color: 'var(--gold-400)' }}>
                    {rel.tagline}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#fff', lineHeight: '1.2' }}>{rel.label}</h3>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--gold-400)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                    Explore Program &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/our-work" className="btn btn--outline btn--lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <ChevronLeft size={18} /> Back to What We Do
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
