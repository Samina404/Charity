import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { programDetails } from '@/data/programs';
import { generatePageMetadata } from '@/lib/metadata';
import { Ear, Users, BarChart3, RefreshCw, CheckCircle2, GraduationCap, Utensils, Home } from 'lucide-react';
import { IMAGES } from '../../lib/images';

export const metadata = generatePageMetadata({
  title: 'What We Do',
  description:
    "Explore how Hope Foundation works across education, health, nutrition, shelter, emergencies, and community resilience to transform children's lives.",
  path: '/our-work',
});

const approach = [
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

export default function OurWorkPage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="work-hero section" aria-label="What We Do hero" style={{ paddingBlock: '4.5rem 3rem', overflow: 'hidden' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="program-row">
            {/* Left Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="work-hero__label">Our Scope of Work</div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
                We Build Stronger
                <br />
                Foundations For Children
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                Our work addresses the root challenges facing vulnerable families. By integrating education, nutritional support, and stable housing, we create environments where children can thrive.
              </p>
              
              {/* Feature Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                    <GraduationCap size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700' }}>Education First</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Classrooms &amp; support</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                    <Utensils size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700' }}>Daily Nutrition</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Healthy hot meals</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                    <Home size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700' }}>Safe Shelter</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Stable housing security</p>
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

              {/* Floating Badge */}
              
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
                We go to remote corners, villages, and cities where it&apos;s really tough to be a child.
              </h2>
              <p className="work-mission__body">
                We ask children, their families, and communities what they need to be healthy, safe, and
                learning. We listen to their experiences, their insights, and their ideas.
              </p>
              <p className="work-mission__body work-mission__body--highlight">
                Together, we work hand in hand to adapt and create new solutions for children facing
                hardship - now and in the future.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Staggered Programs Showcase ────────────────── */}
      <section className="section" style={{ background: 'var(--neutral-100)', borderTop: '1px solid var(--neutral-200)' }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {programDetails.map((prog, idx) => {
              const isEven = idx % 2 === 0;
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
                      order: isEven ? 1 : 2,
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
                      order: isEven ? 2 : 1,
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
                      Program Area 0{idx + 1}
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
                      <Link href={`/our-work/${prog.id}`} className="btn btn--outline btn--lg">
                        Explore {prog.label} Details &rarr;
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
            <p className="approach-hdr__eyebrow">Our Methodology</p>
            <h2 className="approach-hdr__title">A Child-Rights Approach</h2>
            <p className="approach-hdr__desc">
              Since our founding we have been committed to ensuring children&apos;s rights are recognised at
              every level - from local communities to international policy. We promote change from the
              ground up, engaging children, their families, and their communities. Together we work with
              local governments and organisations to ensure their rights are on the agenda.
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
            <Link href="/donate" className="btn btn--primary btn--lg">
              Support Our Work
            </Link>
            <Link href="/stories" className="btn btn--outline btn--lg">
              Read Success Stories
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
