import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';
import { EducationSection } from '@/components/home/education-section';
import { HeroSection } from '@/components/home/hero-section';
import { PortfolioCTA } from '@/components/home/portfolio-cta';
import { SideNav } from '@/components/home/side-nav';
import { SkillsSection } from '@/components/home/skills-section';
import { WorkExperienceSection } from '@/components/home/work-experience-section';
import { AppShell } from '@/components/layout/app-shell';

export default function HomePage() {
  return (
    <AppShell>
      <SideNav />
      <div className="flex w-full flex-col gap-10">
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <SkillsSection />
        <EducationSection />
        {/* TODO: Add portfolio CTA back in */}
        {/* <PortfolioCTA /> */}
        <ContactSection />
      </div>
    </AppShell>
  );
}
