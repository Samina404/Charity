import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { Heart, Sprout, Handshake } from 'lucide-react';
import { IMAGES } from '../../lib/images';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We see every child as unique and deserving of love.' },
  { icon: Sprout, title: 'Empowerment', desc: 'We equip children with skills for lifelong success.' },
  { icon: Handshake, title: 'Community', desc: 'We build lasting partnerships in every region we serve.' },
];

export default function MissionSection() {
  return (
    <section className="mission section">
      <Container className="mission__inner">
        {/* Image column */}
        <div className="mission__image-wrap">
          <Image
            src={IMAGES.missionBg}
            alt="Children in a classroom, engaged and smiling"
            width={600}
            height={500}
            className="mission__image"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={85}
          />
          <div className="mission__image-badge">
            <span className="mission__image-badge-num">20+</span>
            <span className="mission__image-badge-text">Years of Impact</span>
          </div>
        </div>

        {/* Text column */}
        <div className="mission__content">
          <SectionHeading
            title="Our Mission"
            subtitle="We believe every child, regardless of circumstance, deserves access to quality education, proper nutrition, and a safe place to grow."
            align="left"
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

          <Link href="/about" className="btn btn--primary">
            Learn About Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
