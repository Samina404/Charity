import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import StatCard from '@/components/cards/StatCard';
import { stats } from '@/data/stats';
import { getDictionary, Locale } from '@/lib/dictionary';

interface ImpactStatsProps {
  lang: Locale;
}

export default async function ImpactStats({ lang }: ImpactStatsProps) {
  const dict = await getDictionary(lang);
  const t = dict.home.stats;

  const localizedStats = stats.map((stat) => {
    // Translate the label based on icon key
    const label = t.items[stat.icon as keyof typeof t.items] || stat.label;
    
    // Translate suffixes where necessary
    let suffix = stat.suffix;
    if (stat.suffix === 'M+') {
      if (lang === 'bn') suffix = ' মিলিয়ন+';
      else if (lang === 'ar') suffix = ' مليون+';
    }

    return {
      ...stat,
      label,
      suffix,
    };
  });

  return (
    <section className="impact section section--accent">
      <Container>
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="impact__grid">
          {localizedStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
