import HeroSection from '@/components/sections/HeroSection';
import MissionSection from '@/components/sections/MissionSection';
import ImpactStats from '@/components/sections/ImpactStats';
import StoriesPreview from '@/components/sections/StoriesPreview';
import DonateSection from '@/components/sections/DonateSection';
import UpdatesSection from '@/components/sections/UpdatesSection';
import FAQSection from '@/components/sections/FAQSection';

// Pure Server Component — zero client JS from this file
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ImpactStats />
      <StoriesPreview />
      <DonateSection />
      <UpdatesSection />
      <FAQSection />
    </>
  );
}
