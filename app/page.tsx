import HeroAbout from "@/components/portfolio/HeroAbout";
import FloatingResumeButton from "@/components/portfolio/FloatingResumeButton";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";
import TechnicalArsenal from "@/components/portfolio/TechnicalArsenal";
import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import CoCurricularActivities from "@/components/portfolio/CoCurricularActivities";
import Credentials from "@/components/portfolio/Credentials";
import Training from "@/components/portfolio/Training";
import ContactSection from "@/components/portfolio/ContactSection";

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-[#020617] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(6,182,212,0.22),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.2),transparent_35%),linear-gradient(180deg,#020617_0%,#030712_100%)]" />

      <FloatingNav navItems={navItems} />

      <HeroAbout />

      <div className="mx-auto w-full max-w-340 px-4 pb-8 sm:px-6 lg:px-8 space-y-24">
        <TechnicalArsenal />
        <FeaturedProjects />
        <Training />
        <Credentials />
        <CoCurricularActivities />
        <ContactSection />
      </div>

      <FloatingResumeButton />
    </main>
  );
}
