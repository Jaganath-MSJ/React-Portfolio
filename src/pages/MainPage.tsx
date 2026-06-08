import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/features/hero/Hero';
import { About } from '@/features/about/About';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { Stack } from '@/features/stack/Stack';
import { Timeline } from '@/features/timeline/Timeline';
import { Contact } from '@/features/contact/Contact';
import { scrollToId } from '@/shared/lib/scrollToId';

export function MainPage() {
  const location = useLocation();

  // Handle nav jumps that arrive from another route (e.g. /projects → /#Stack)
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      // wait a frame so sections have rendered before measuring
      requestAnimationFrame(() => scrollToId(target));
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Stack />
      <Timeline />
      <Contact />
    </>
  );
}
