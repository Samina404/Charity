import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { Heart, Sprout, Handshake } from 'lucide-react';
import { IMAGES } from '../../lib/images';
import { getDictionary, Locale } from '@/lib/dictionary';

interface MissionSectionProps {
  lang: Locale;
}

export default async function MissionSection({ lang }: MissionSectionProps) {
  const dict = await getDictionary(lang);
  const t = dict.home.mission;

  const values = [
    { icon: Heart, title: t.values.compassion_title, desc: t.values.compassion_desc },
    { icon: Sprout, title: t.values.empowerment_title, desc: t.values.empowerment_desc },
    { icon: Handshake, title: t.values.community_title, desc: t.values.community_desc },
  ];

  return (
    <section className="mission section">
      <Container className="mission__inner">
        {/* Image column */}
        <div className="mission__image-wrap">
          <Image
            src={IMAGES.missionBg}
            alt={lang === 'ar' ? 'أطفال في فصل دراسي مبتسمين ومتفاعلين' : lang === 'bn' ? 'শিশুরা একটি শ্রেণীকক্ষে হাসিখুশি এবং মনোযোগী' : 'Children in a classroom, engaged and smiling'}
            width={600}
            height={500}
            className="mission__image"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={85}
          />
          <div className="mission__image-badge">
            <span className="mission__image-badge-num">
              {lang === 'ar' ? '٢٠+' : lang === 'bn' ? '২০+' : '20+'}
            </span>
            <span className="mission__image-badge-text">{t.years_of_impact}</span>
          </div>
        </div>

        {/* Text column */}
        <div className="mission__content">
          <SectionHeading
            title={t.title}
            subtitle={t.subtitle}
            align={lang === 'ar' ? 'right' : 'left'}
          />

          <div className="mission__values">
            {values.map((v) => {
              const IconComponent = v.icon;
              return (
                <div key={v.title} className="mission__value">
                  <span className="mission__value-icon" aria-hidden="true">
                    <IconComponent size={24} className="text-[var(--gold-500)]" />
                  </span>
                  <div>
                    <h3 className="mission__value-title">{v.title}</h3>
                    <p className="mission__value-desc">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link href={`/${lang}/about`} className="btn btn--primary">
            {t.button}
          </Link>
        </div>
      </Container>
    </section>
  );
}
