import dynamic from "next/dynamic";
import HeroAbout from "@/components/portfolio/HeroAbout";
import FloatingResumeButton from "@/components/portfolio/FloatingResumeButton";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

const TechnicalArsenal = dynamic(
  () => import("@/components/portfolio/TechnicalArsenal"),
);
const FeaturedProjects = dynamic(
  () => import("@/components/portfolio/FeaturedProjects"),
);
const Credentials = dynamic(() => import("@/components/portfolio/Credentials"));
const ContactSection = dynamic(
  () => import("@/components/portfolio/ContactSection"),
);

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-[#020617] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(6,182,212,0.22),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.2),transparent_35%),linear-gradient(180deg,#020617_0%,#030712_100%)]" />

      <FloatingNav navItems={navItems} />

      <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <HeroAbout />
        <TechnicalArsenal />
        <FeaturedProjects />
        <Credentials />
        <ContactSection />
      </div>

      <FloatingResumeButton />
    </main>
  );
}
