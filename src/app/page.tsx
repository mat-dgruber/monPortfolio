import PortalNavigation from "@/components/PortalNavigation";
import PortalHero from "@/components/PortalHero";
import StatementFold from "@/components/StatementFold";
import ArchitectureBento from "@/components/ArchitectureBento";
import ReleasesDeck from "@/components/ReleasesDeck";
import RosterAndDates from "@/components/RosterAndDates";
import PortalClose from "@/components/PortalClose";

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen bg-[#0A0C0E] text-[#EDE7DC]">
      <PortalNavigation />
      <PortalHero />
      <StatementFold />
      <ArchitectureBento />
      <ReleasesDeck />
      <RosterAndDates />
      <PortalClose />
    </main>
  );
}
