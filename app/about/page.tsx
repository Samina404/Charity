import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { generatePageMetadata } from '@/lib/metadata';
import { Heart, Users, ShieldCheck, Leaf } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'About Us',
  description:
    "Learn about Hope Foundation's mission, values, and the team dedicated to building brighter futures for children worldwide.",
  path: '/about',
});

const values = [
  {
    icon: Heart,
    title: 'Child-Centred',
    desc: 'Every decision starts with one question - is this best for the child?',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    icon: Users,
    title: 'Community-Led',
    desc: 'We co-design every program alongside local families and leaders.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent',
    desc: 'Annual impact reports and independent financial audits - no exceptions.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    desc: 'We build lasting systems so change continues long after we leave.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
];

const timeline = [
  { year: '2005', event: 'Founded with a mission to support 50 children in rural Kenya.' },
  { year: '2009', event: 'Expanded to 3 countries. Launched our first nutrition program, serving 400 meals a day.' },
  { year: '2013', event: 'Opened our 10th learning centre. Reached 1,000 children for the first time.' },
  { year: '2017', event: 'Launched the Emergency Relief Fund. Responded to our first humanitarian crisis.' },
  { year: '2021', event: '3,000+ children supported. Operating in 12 countries across 3 continents.' },
  { year: '2025', event: '5,000+ children in 45 communities. 85% of every dollar goes directly to programs.' },
];

const team = [
  {
    initials: 'SM',
    name: 'Dr. Sarah Mitchell',
    role: 'Executive Director',
    bio: 'Leading Hope Foundation since 2012 with 20+ years in nonprofit leadership.',
  },
  {
    initials: 'JO',
    name: 'James Okonkwo',
    role: 'Programs Director',
    bio: 'Oversees field operations across 12 countries and 45 communities.',
  },
  {
    initials: 'MS',
    name: 'Maria Santos',
    role: 'Development Lead',
    bio: 'Drives fundraising strategy and major donor partnerships.',
  },
  {
    initials: 'DC',
    name: 'David Chen',
    role: 'Finance Director',
    bio: 'Ensures transparent fund allocation - 85% going directly to programs.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="work-hero section" aria-label="About hero">
        <Container className="work-hero__inner">
          <div className="work-hero__copy">
            <div className="work-hero__label">About Us</div>
            <h1 className="work-hero__title">
              We Build Brighter Futures<br />
              With Children &amp; Communities
            </h1>
            <p className="work-hero__sub">A child-focused charity rooted in partnership.</p>
            <p className="au-body-lead max-w-[56ch]">
              Hope Foundation works alongside children, their families, and local partners to create
              lasting change in the places where support matters most.
            </p>
            <div className="work-hero__actions flex flex-wrap gap-4">
              <Link href="/our-work" className="btn btn--primary btn--lg">
                Explore Our Work
              </Link>
              <Link href="/contact" className="btn btn--outline btn--lg">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="work-hero__frame">
            <Image
              src="/images/mission.webp"
              alt="Children raising hands in a Hope Foundation classroom"
              fill
              priority
              className="work-hero__img"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
          </div>
        </Container>
      </section>

      <section className="work-mission section">
        <Container>
          <div className="work-mission__inner">
            <div className="work-mission__accent" aria-hidden="true" />
            <div className="work-mission__text">
              <h2 className="work-mission__title">
                We create lasting, positive change for and with children
              </h2>
              <p className="work-mission__body">
                Hope Foundation is an independent children&apos;s charity dedicated to transforming the lives of
                children in the world&apos;s most vulnerable communities.
              </p>
              <p className="work-mission__body">
                We work alongside children, their families, and local partners - discovering new solutions to
                help every child survive, learn, and be protected. What started as a small initiative
                supporting 50 children in rural Kenya has grown into a network reaching 5,000+ children
                across 45 communities in 12 countries.
              </p>
              <p className="work-mission__body work-mission__body--highlight">
                We take a holistic approach: education, nutrition, safe shelter, emergency relief, and
                community resilience - because a child who is hungry or afraid cannot focus on learning.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="au-section-header">
            <p className="au-section-eyebrow">Our Principles</p>
            <h2 className="au-section-title">What We Stand For</h2>
            <p className="au-section-desc">
              Four principles guide everything we do - from program design to how we manage every donation.
            </p>
          </div>
          <div className="approach-grid">
            {values.map((v, idx) => {
              const IconComponent = v.icon;
              return (
                <div
                  key={v.title}
                  className="approach-card"
                >
                  <div className="approach-card__top">
                    <div className={`approach-card__icon ${v.bg} ${v.color}`}>
                      <IconComponent className="au-value-card__lucide-icon" size={22} strokeWidth={2} />
                    </div>
                    <span className="approach-card__num">0{idx + 1}</span>
                  </div>
                  <h3 className="approach-card__title">{v.title}</h3>
                  <p className="approach-card__desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="au-section-header">
            <p className="au-section-eyebrow">Our History</p>
            <h2 className="au-section-title">Our Journey</h2>
            <p className="au-section-desc">
              Twenty years of growing alongside the children and communities we serve.
            </p>
          </div>

          <div className="au-timeline mx-auto max-w-[960px]">
            {timeline.map((item, idx) => (
              <div
                key={item.year}
                className={`au-timeline__item ${idx % 2 === 0 ? 'au-timeline__item--even' : 'au-timeline__item--odd'}`}
              >
                <div className="au-timeline__year-col">
                  <span className="au-timeline__year">{item.year}</span>
                </div>
                <div className="au-timeline__track">
                  <div className="au-timeline__dot" />
                  <div className="au-timeline__line" />
                </div>
                <div className="au-timeline__card">
                  <p className="au-timeline__event">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="au-section-header">
            <p className="au-section-eyebrow">The People</p>
            <h2 className="au-section-title">Our Leadership</h2>
            <p className="au-section-desc">Dedicated professionals driving our mission forward every day.</p>
          </div>
          <div className="au-team-grid grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="au-team-card rounded-[2rem] border border-slate-200 bg-white/95 p-8 text-center shadow-[0_8px_28px_rgba(10,14,28,.06)]"
              >
                <div className="au-team-card__avatar">{member.initials}</div>
                <h3 className="au-team-card__name">{member.name}</h3>
                <p className="au-team-card__role">{member.role}</p>
                <p className="au-team-card__bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="au-cta">
        <Container>
          <div className="au-cta__inner">
            <h2 className="au-cta__title">Ready to make a difference?</h2>
            <p className="au-cta__desc">
              Whether you donate, volunteer, or share our story - you become part of the change.
            </p>
            <div className="au-cta__actions">
              <Link href="/donate" className="btn btn--primary btn--lg">
                Donate Now
              </Link>
              <Link href="/contact" className="btn btn--outline btn--lg">
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
