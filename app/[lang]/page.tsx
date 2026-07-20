import HeroSection from '@/components/sections/HeroSection';
import MissionSection from '@/components/sections/MissionSection';
import ImpactStats from '@/components/sections/ImpactStats';
import StoriesPreview from '@/components/sections/StoriesPreview';
import DonateSection from '@/components/sections/DonateSection';
import UpdatesSection from '@/components/sections/UpdatesSection';
import FAQSection from '@/components/sections/FAQSection';
import { Locale } from '@/lib/dictionary';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  
  return (
    <>
      <HeroSection lang={lang as Locale} />
      <MissionSection lang={lang as Locale} />
      <ImpactStats lang={lang as Locale} />
      <StoriesPreview lang={lang as Locale} />
      <DonateSection lang={lang as Locale} />
      <UpdatesSection lang={lang as Locale} />
      <FAQSection lang={lang as Locale} />
    </>
  );
}
