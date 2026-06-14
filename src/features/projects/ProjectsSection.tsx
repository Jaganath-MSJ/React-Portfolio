import data from '@/data/data.json';
import { SectionHead } from '@/shared/ui/SectionHead';
import { useReveal } from '@/shared/hooks/useReveal';
import { ProjectsGrid } from './ProjectsGrid';

export function ProjectsSection() {
  const ref = useReveal();
  return (
    <section id="Projects" aria-label="Personal projects">
      <div className="shell" ref={ref}>
        <SectionHead
          label={data.projects.label}
          title={data.projects.title}
          accent={data.projects.accent}
          caption={data.projects.caption}
        />
        <ProjectsGrid />
      </div>
    </section>
  );
}
