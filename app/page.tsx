import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { EducationSection } from "@/components/home/education-section";
import { HeroSection } from "@/components/home/hero-section";
import { PortfolioCTA } from "@/components/home/portfolio-cta";
import { SideNav } from "@/components/home/side-nav";
import { SkillsSection } from "@/components/home/skills-section";
import { WorkExperienceSection } from "@/components/home/work-experience-section";
import { AppShell } from "@/components/layout/app-shell";

export default function HomePage() {
  return (
    <AppShell>
      <div className="grid w-full gap-10 lg:grid-cols-[200px_minmax(0,1fr)]">
        <div className="hidden lg:block">
          <SideNav />
        </div>
        <div className="flex flex-col gap-10">
          <HeroSection />
          <AboutSection />
          <WorkExperienceSection />
          <SkillsSection />
          <EducationSection />
          <PortfolioCTA />
          <ContactSection />
        </div>
      </div>
    </AppShell>
  );
}
