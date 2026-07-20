import Link from 'next/link';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import StoryCard from '@/components/cards/StoryCard';
import { getStories } from '@/data/stories';
import { IMAGES } from '../../lib/images';
import { getDictionary, Locale } from '@/lib/dictionary';

interface StoriesPreviewProps {
  lang: Locale;
}

export default async function StoriesPreview({ lang }: StoriesPreviewProps) {
  const dict = await getDictionary(lang);
  const t = dict.home.stories;
  const list = getStories(lang).slice(0, 3);

  return (
    <section 
      className="stories-preview section"
      style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${IMAGES.storiesPreviewBg})` }}
    >
      <Container>
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="stories-preview__grid">
          {list.map((story) => (
            <StoryCard key={story.id} story={story} lang={lang} />
          ))}
        </div>

        <div className="stories-preview__cta">
          <Link href={`/${lang}/stories`} className="btn btn--outline btn--lg">
            {t.cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
