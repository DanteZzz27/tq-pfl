import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/layout/PageLoader";
import { MobileContactPill } from "@/components/layout/MobileContactPill";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Header />
      <main className="transform-gpu">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileContactPill />
    </>
  );
}
