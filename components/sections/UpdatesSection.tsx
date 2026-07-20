import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import UpdateCard from '@/components/cards/UpdateCard';
import { getUpdates } from '@/data/updates';
import { getDictionary, Locale } from '@/lib/dictionary';

interface UpdatesSectionProps {
  lang: Locale;
}

export default async function UpdatesSection({ lang }: UpdatesSectionProps) {
  const dict = await getDictionary(lang);
  const t = dict.home.updates;
  const list = getUpdates(lang);

  return (
    <section className="updates section">
      <Container>
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="updates__grid">
          {list.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      </Container>
    </section>
  );
}
