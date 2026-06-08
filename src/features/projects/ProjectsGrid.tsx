import { useMemo, useState } from 'react';
import data from '@/data/data.json';
import { ProjectCard, type Project } from './ProjectCard';
import styles from './Projects.module.css';

const PROJECTS = data.Projects as Project[];

export function ProjectsGrid() {
  const cats = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.cat] = (counts[p.cat] || 0) + 1;
    });
    return Object.entries(counts).map(([key, count]) => ({ key, count }));
  }, []);

  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <>
      <div className={styles.controls} role="tablist" aria-label="Project filter">
        {cats.map((c) => (
          <button
            key={c.key}
            type="button"
            role="tab"
            aria-selected={filter === c.key}
            className={`${styles.chip} ${filter === c.key ? styles.chipActive : ''}`}
            onClick={() => setFilter(c.key)}
          >
            {c.key}
            <span className={styles.count}>{c.count}</span>
          </button>
        ))}
      </div>
      <ul className={styles.grid}>
        {filtered.map((p) => (
          <ProjectCard project={p} key={p.label} />
        ))}
      </ul>
    </>
  );
}
