import Link from 'next/link';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import StoryCard from '@/components/cards/StoryCard';
import { stories } from '@/data/stories';
import { IMAGES } from '../../lib/images';

export default function StoriesPreview() {
  const latest = stories.slice(0, 3);

  return (
    <section 
      className="stories-preview section"
      style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${IMAGES.storiesPreviewBg})` }}
    >
      <Container>
        <SectionHeading
          title="Stories of Hope"
          subtitle="Behind every statistic is a real child with a real story. These are the faces of change."
        />

        <div className="stories-preview__grid">
          {latest.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        <div className="stories-preview__cta">
          <Link href="/stories" className="btn btn--outline btn--lg">
            Read All Stories →
          </Link>
        </div>
      </Container>
    </section>
  );
}
