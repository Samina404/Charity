import Image from 'next/image';
import Link from 'next/link';
import type { Story } from '@/types';
import Badge from '@/components/ui/Badge';
import { formatDate, truncateText } from '@/lib/utils';
import { Locale } from '@/lib/dictionary';

interface StoryCardProps {
  story: Story;
  lang: Locale;
}

export default function StoryCard({ story, lang }: StoryCardProps) {
  const linkLabel = lang === 'ar' 
    ? 'قراءة القصة كاملة ←' 
    : lang === 'bn' 
      ? 'সম্পূর্ণ গল্প পড়ুন ←' 
      : 'Read Full Story →';

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
        <Link href={`/${lang}/stories/${story.slug}`} className="story-card__link">
          {linkLabel}
        </Link>
      </div>
    </article>
  );
}
