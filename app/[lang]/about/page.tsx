import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { generatePageMetadata } from '@/lib/metadata';
import { Heart, Users, ShieldCheck, Leaf } from 'lucide-react';
import { getDictionary, Locale } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return generatePageMetadata({
    title: dict.meta.about_title,
    description: dict.meta.about_desc,
    path: `/${lang}/about`,
  });
}

const valueIcons = [Heart, Users, ShieldCheck, Leaf];
const valueColors = [
  { color: 'text-red-500', bg: 'bg-red-500/10' },
  { color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { color: 'text-amber-500', bg: 'bg-amber-500/10' },
];

const teamInitials = ['SM', 'JO', 'MS', 'DC'];

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.about;

  const values = t.principles_items.map((item: any, idx: number) => ({
    ...item,
    icon: valueIcons[idx] || Heart,
    ...valueColors[idx],
  }));

  const team = t.people_items.map((item: any, idx: number) => ({
    ...item,
    initials: teamInitials[idx] || 'HF',
  }));

  const isRtl = lang === 'ar';

  return (
    <>
      <section className="work-hero section" aria-label="About hero">
        <Container className="work-hero__inner">
          <div className="work-hero__copy">
            <div className="work-hero__label">{t.label}</div>
            <h1 className="work-hero__title" style={{ whiteSpace: 'pre-line' }}>
              {t.title}
            </h1>
            <p className="work-hero__sub">{t.sub}</p>
            <p className="au-body-lead max-w-[56ch]">
              {t.lead}
            </p>
            <div className="work-hero__actions flex flex-wrap gap-4">
              <Link href={`/${lang}/our-work`} className="btn btn--primary btn--lg">
                {t.cta_explore}
              </Link>
              <Link href={`/${lang}/contact`} className="btn btn--outline btn--lg">
                {t.cta_contact}
              </Link>
            </div>
          </div>

          <div className="work-hero__frame">
            <Image
              src="/images/mission.webp"
              alt={isRtl ? 'أطفال يرفعون أيديهم في فصل دراسي لمؤسسة الأمل' : lang === 'bn' ? 'হোপ ফাউন্ডেশনের ক্লাসরুমে হাত তুলছে শিশুরা' : 'Children raising hands in a Hope Foundation classroom'}
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
                {t.mission_title}
              </h2>
              <p className="work-mission__body">
                {t.mission_p1}
              </p>
              <p className="work-mission__body">
                {t.mission_p2}
              </p>
              <p className="work-mission__body work-mission__body--highlight">
                {t.mission_highlight}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <div className="au-section-header">
            <p className="au-section-eyebrow">{t.principles_eyebrow}</p>
            <h2 className="au-section-title">{t.principles_title}</h2>
            <p className="au-section-desc">
              {t.principles_desc}
            </p>
          </div>
          <div className="approach-grid">
            {values.map((v: any, idx: number) => {
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
            <p className="au-section-eyebrow">{t.history_eyebrow}</p>
            <h2 className="au-section-title">{t.history_title}</h2>
            <p className="au-section-desc">
              {t.history_desc}
            </p>
          </div>

          <div className="au-timeline mx-auto max-w-[960px]">
            {t.history_items.map((item: any, idx: number) => (
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
            <p className="au-section-eyebrow">{t.people_eyebrow}</p>
            <h2 className="au-section-title">{t.people_title}</h2>
            <p className="au-section-desc">{t.people_desc}</p>
          </div>
          <div className="au-team-grid grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {team.map((member: any) => (
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
            <h2 className="au-cta__title">{t.ready}</h2>
            <p className="au-cta__desc">
              {t.ready_desc}
            </p>
            <div className="au-cta__actions">
              <Link href={`/${lang}/donate`} className="btn btn--primary btn--lg">
                {dict.footer.links.donate}
              </Link>
              <Link href={`/${lang}/contact`} className="btn btn--outline btn--lg">
                {t.cta_contact}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
