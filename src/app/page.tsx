import CyberHeader from '@/components/CyberHeader';
import HeroSection from '@/components/HeroSection';
import ProjectGrid from '@/components/ProjectGrid';
import TechStackSection from '@/components/TechStackSection';
import AboutSection from '@/components/AboutSection';
import CareerTimeline from '@/components/CareerTimeline';
import CertificationsSection from '@/components/CertificationsSection';
import LabSection from '@/components/LabSection';
import CyberFooter from '@/components/CyberFooter';

export default function Home() {
  return (
    <main id="main-content" className="relative overflow-hidden">
      <CyberHeader />
      <HeroSection />
      <ProjectGrid />
      <TechStackSection />
      <AboutSection />
      <CareerTimeline />
      <CertificationsSection />
      <LabSection />
      <CyberFooter />
    </main>
  );
}
