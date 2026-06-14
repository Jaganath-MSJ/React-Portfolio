import { useEffect, useMemo, useRef, useState } from 'react';
import data from '@/data/data.json';
import { ProjectCard, type Project } from './ProjectCard';
import styles from './Projects.module.css';

const PROJECTS = data.projects.items as Project[];

export function ProjectsGrid() {
  // remember which cards already revealed so switching filters doesn't replay them
  const seen = useRef<Set<string>>(new Set());
  const cats = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.cat] = (counts[p.cat] || 0) + 1;
    });
    return Object.entries(counts).map(([key, count]) => ({ key, count }));
  }, []);

  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  // mark currently-rendered cards as seen after paint (not during render, so
  // StrictMode's double render can't flip the first-load animation off)
  useEffect(() => {
    filtered.forEach((p) => seen.current.add(p.label));
  });

  return (
    <>
      <div className={`reveal ${styles.controls}`} role="tablist" aria-label="Project filter">
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
        {filtered.map((p, i) => (
          <ProjectCard
            project={p}
            index={Math.min(i + 1, 6)}
            animate={!seen.current.has(p.label)}
            key={p.label}
          />
        ))}
      </ul>
    </>
  );
}
