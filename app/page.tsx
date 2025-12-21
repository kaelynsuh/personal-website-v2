import { About } from '@/components/home/About';
import { Contact } from '@/components/home/Contact';
import { Education } from '@/components/home/Education';
import { Intro } from '@/components/home/Intro';
import { SideNav } from '@/components/layout/SideNav';
import { Skills } from '@/components/home/Skills';
import { WorkExperience } from '@/components/home/WorkExperience';
import { AppShell } from '@/components/layout/AppShell';

export default function HomePage() {
  return (
    <AppShell>
      <>
        <SideNav />
        <div className="flex w-full flex-col gap-10">
          <Intro />
          <About />
          <WorkExperience />
          <Skills />
          <Education />
          <Contact />
        </div>
      </>
    </AppShell>
  );
}
