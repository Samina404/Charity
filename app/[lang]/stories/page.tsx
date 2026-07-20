import Image from 'next/image';
import Container from '@/components/layout/Container';
import StoryCard from '@/components/cards/StoryCard';
import { getStories } from '@/data/stories';
import { generatePageMetadata } from '@/lib/metadata';
import { IMAGES } from '@/lib/images';
import { Heart, Globe } from 'lucide-react';
import { getDictionary, Locale } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return generatePageMetadata({
    title: dict.meta.stories_title,
    description: dict.meta.stories_desc,
    path: `/${lang}/stories`,
  });
}

export default async function StoriesPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const t = dict.stories_page;
  const stories = getStories(lang as Locale);
  const featuredStory = stories[0];

  const labelComm = lang === 'ar' ? 'بقيادة المجتمع' : lang === 'bn' ? 'সম্প্রদায় পরিচালিত' : 'Community driven';
  const labelTrans = lang === 'ar' ? 'حياة تحولت' : lang === 'bn' ? 'জীবন রূপান্তরিত' : 'Lives Transformed';
  
  const missionHeading = lang === 'ar'
    ? 'طريقة هادئة لإظهار ما يمكن للعمل الخيري تحقيقه.'
    : lang === 'bn'
      ? 'দাতব্য কার্যক্রম কী করতে পারে তা দেখানোর একটি সহজ উপায়।'
      : 'A quiet way to show what charity can do.';
  const missionBody = lang === 'ar'
    ? 'تفتح كل قصة في صفحة كاملة مصممة بنفس هيكل صفحات البرامج لدينا. نحن نحافظ على بساطة التصميم لتبقى القصة والصورة والرسالة في المركز.'
    : lang === 'bn'
      ? 'প্রতিটি গল্প একটি পূর্ণাঙ্গ পৃষ্ঠায় খোলে, যা আমাদের কার্যক্রম পৃষ্ঠাগুলোর মতোই একই কাঠামোতে সাজানো। আমরা নকশাটি সাধারণ রাখি যাতে গল্প, ছবি এবং বার্তাটিই কেন্দ্রবিন্দুতে থাকে।'
      : 'Each story opens into a fuller page, shaped with the same structure as our program pages. We keep the design simple so the story, the image, and the message stay at the centre.';
  const missionHighlight = lang === 'ar'
    ? 'ابدأ بالقصة المميزة أدناه، ثم استكشف باقي الأرشيف واحدة تلو الأخرى.'
    : lang === 'bn'
      ? 'নিচের ফিচার্ড গল্পটি দিয়ে শুরু করুন, তারপর একে একে বাকি আর্কাইভগুলো অন্বেষণ করুন।'
      : 'Start with the featured story below, then explore the rest of the archive one by one.';

  const numTransformed = lang === 'ar' ? '١٢,٠٠٠+' : lang === 'bn' ? '১২,০০০+' : '12,000+';

  return (
    <>
      <section className="work-hero stories-hero section" aria-label="Stories hero" style={{ paddingBlock: '4.5rem 3rem', overflow: 'hidden' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="program-row">
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="work-hero__label">{t.label}</div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', whiteSpace: 'pre-line' }}>
                {t.title}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                {t.sub}
              </p>
              
              {/* Highlight Stats */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                    <Heart size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', lineHeight: 1 }}>100%</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{labelComm}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                    <Globe size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', lineHeight: 1 }}>{numTransformed}</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{labelTrans}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Overlapping Dual Image Stack */}
            <div style={{ position: 'relative', width: '100%', height: '420px' }}>
              {/* Background Glow */}
              <div style={{ position: 'absolute', right: '-10%', top: '-10%', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%)', zIndex: 0 }} />
              
              {/* Main Image */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '75%', height: '85%', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--neutral-200)', zIndex: 1 }}>
                <Image
                  src={IMAGES.storyImpact}
                  alt="Community members sharing smiles during a family support gathering"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                  priority
                />
              </div>

              {/* Offset Overlapping Image */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '45%', height: '55%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '4px solid #fff', zIndex: 2 }}>
                <Image
                  src={IMAGES.storyChild1}
                  alt="Sponsor child portrait"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="work-mission stories-mission section">
        <Container>
          <div className="work-mission__inner">
            <div className="work-mission__accent" aria-hidden="true" />
            <div className="work-mission__text">
              <h2 className="work-mission__title">{missionHeading}</h2>
              <p className="work-mission__body">
                {missionBody}
              </p>
              <p className="work-mission__body work-mission__body--highlight">
                {missionHighlight}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="stories-grid" style={{ marginBottom: '2rem' }}>
            <StoryCard story={featuredStory} lang={lang as Locale} />
            {stories.slice(1).map((story) => (
              <StoryCard key={story.id} story={story} lang={lang as Locale} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
