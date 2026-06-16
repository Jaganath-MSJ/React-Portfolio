import { Link } from 'react-router-dom';
import data from '@/data/data.json';
import { SectionHead } from '@/shared/ui/SectionHead';
import { useReveal } from '@/shared/hooks/useReveal';
import { IcArrowRight } from '@/shared/icons';
import { ProjectsGrid } from './ProjectsGrid';
import styles from './Projects.module.css';

export function ProjectsPage() {
  const ref = useReveal();
  return (
    <section className={styles.page} aria-label="All projects">
      <div className="shell" ref={ref}>
        <Link to="/" className={`reveal ${styles.back}`}>
          <IcArrowRight width={14} height={14} className={styles.backArrow} /> Back home
        </Link>
        <SectionHead
          label={data.projects.page.label}
          title={data.projects.page.title}
          accent={data.projects.page.accent}
          caption={data.projects.page.caption}
        />
        <ProjectsGrid />
      </div>
    </section>
  );
}
