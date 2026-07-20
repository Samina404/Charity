import Image from 'next/image';
import type { Update } from '@/types';
import Badge from '@/components/ui/Badge';
import { formatDate, truncateText } from '@/lib/utils';

interface UpdateCardProps {
  update: Update;
}

export default function UpdateCard({ update }: UpdateCardProps) {
  return (
    <article className="update-card">
      <div className="update-card__image-wrap">
        <Image
          src={update.image}
          alt={update.title}
          width={600}
          height={400}
          className="update-card__image"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="update-card__body">
        <div className="update-card__meta">
          <Badge label={update.category} variant="navy" />
          <time className="update-card__date" dateTime={update.date}>
            {formatDate(update.date)}
          </time>
        </div>
        <h3 className="update-card__title">{update.title}</h3>
        <p className="update-card__excerpt">{truncateText(update.excerpt, 130)}</p>
      </div>
    </article>
  );
}
