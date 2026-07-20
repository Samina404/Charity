import Image from 'next/image';
import Link from 'next/link';
import type { Story } from '@/types';
import Badge from '@/components/ui/Badge';
import { formatDate, truncateText } from '@/lib/utils';

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="story-card">
      <div className="story-card__image-wrap">
        <Image
          src={story.image}
          alt={story.title}
          width={600}
          height={400}
          className="story-card__image"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Badge label={story.category} variant="coral" />
      </div>

      <div className="story-card__body">
        <p className="story-card__date">{formatDate(story.date)}</p>
        <h3 className="story-card__title">{story.title}</h3>
        <p className="story-card__excerpt">{truncateText(story.excerpt, 120)}</p>
        <p className="story-card__child">- {story.childName}</p>
        <Link href={`/stories/${story.slug}`} className="story-card__link">
          Read Full Story {'->'}
        </Link>
      </div>
    </article>
  );
}
