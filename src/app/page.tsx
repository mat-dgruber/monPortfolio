import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import ProjectGrid from '@/components/ProjectGrid';
import TechStackSection from '@/components/TechStackSection';
import AboutSection from '@/components/AboutSection';
import CareerTimeline from '@/components/CareerTimeline';
import CertificationsSection from '@/components/CertificationsSection';
import LabSection from '@/components/LabSection';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <main id="main-content" className="relative overflow-hidden">
      <SiteHeader />
      <HeroSection />
      <ProjectGrid />
      <TechStackSection />
      <AboutSection />
      <CareerTimeline />
      <CertificationsSection />
      <LabSection />
      <SiteFooter />
    </main>
  );
}
