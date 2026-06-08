import { SectionHead } from '@/shared/ui/SectionHead';
import { useFadeIn } from '@/shared/hooks/useFadeIn';
import { ProjectsGrid } from './ProjectsGrid';

export function ProjectsSection() {
  const ref = useFadeIn();
  return (
    <section id="Projects" aria-label="Personal projects">
      <div className="shell" ref={ref}>
        <SectionHead
          label="02 — Personal projects"
          title="Side projects"
          accent="I've built."
          caption="Built outside of work — open-source utilities, weekend experiments, and small products I shipped on my own."
        />
        <ProjectsGrid />
      </div>
    </section>
  );
}
