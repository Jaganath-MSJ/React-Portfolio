import { IcArrowUR } from '@/shared/icons';
import styles from './Projects.module.css';

export interface Project {
  label: string;
  year: number;
  cat: string;
  desc: string;
  tags: string[];
  img: string;
  view: string;
  code: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className={`card ${styles.projectCard}`}>
      <a
        className={styles.img}
        href={project.view}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.label} — live preview`}
      >
        <img src={project.img} alt={project.label} draggable="false" loading="lazy" decoding="async" />
      </a>
      <div className={styles.meta}>
        <span className={styles.yr}>{project.year}</span>
        <span className={styles.metaDot} aria-hidden="true" />
        <span>{project.cat}</span>
      </div>
      <h3>{project.label}</h3>
      <p className={styles.desc}>{project.desc}</p>
      <ul className={styles.tags}>
        {project.tags.map((t) => (
          <li className={styles.tag} key={t}>
            {t}
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        <a className={styles.link} href={project.view} target="_blank" rel="noreferrer">
          Live <IcArrowUR width={12} height={12} className={styles.arrow} />
        </a>
        <a className={styles.link} href={project.code} target="_blank" rel="noreferrer">
          Code <IcArrowUR width={12} height={12} className={styles.arrow} />
        </a>
      </div>
    </li>
  );
}
