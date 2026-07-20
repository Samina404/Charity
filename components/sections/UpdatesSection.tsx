import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import UpdateCard from '@/components/cards/UpdateCard';
import { updates } from '@/data/updates';

export default function UpdatesSection() {
  return (
    <section className="updates section">
      <Container>
        <SectionHeading
          title="Latest News & Updates"
          subtitle="Stay informed about our programs, events, and the children whose lives you are changing."
        />

        <div className="updates__grid">
          {updates.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      </Container>
    </section>
  );
}
