import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import StatCard from '@/components/cards/StatCard';
import { stats } from '@/data/stats';

export default function ImpactStats() {
  return (
    <section className="impact section section--accent">
      <Container>
        <SectionHeading
          title="Our Impact in Numbers"
          subtitle="Every donation, every sponsor, every volunteer creates measurable change in children's lives."
        />

        <div className="impact__grid">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
