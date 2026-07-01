import type { CSSProperties } from 'react';
import data from '@/data/data.json';
import { SectionHead } from '@/shared/ui/SectionHead';
import { useReveal } from '@/shared/hooks/useReveal';
import { useInView } from '@/shared/hooks/useInView';
import { useCountUp } from '@/shared/hooks/useCountUp';
import styles from './About.module.css';

function StatNumber({ value, active }: { value: string; active: boolean }) {
  const match = /^(\d+)(.*)$/.exec(value);
  const end = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const count = useCountUp(end, active);
  return (
    <dt className={styles.num}>
      {match ? count : value}
      {match ? suffix : ''}
    </dt>
  );
}

export function About() {
  const ref = useReveal();
  const stats = useInView<HTMLDListElement>();

  return (
    <section id="About" aria-label="About">
      <div className="shell" ref={ref}>
        <SectionHead
          label={data.about.label}
          title={data.about.title}
          accent={data.about.accent}
          caption={data.about.caption}
        />
        <div className={styles.grid}>
          <figure className={`reveal ${styles.portrait}`} style={{ '--i': 1 } as CSSProperties}>
            <img src={data.profile.img} alt={data.profile.nameInc} draggable="false" loading="lazy" decoding="async" />
          </figure>
          <div className={`reveal ${styles.body}`} style={{ '--i': 2 } as CSSProperties}>
            <h3>
              I'm {data.profile.name}, a <span className={styles.accent}>{data.about.leadAccent}</span>{' '}
              {data.about.leadTail}
            </h3>
            <p>{data.about.blurb}</p>
            <p>{data.about.blurb2}</p>
            <dl className={styles.stats} ref={stats.ref}>
              {data.about.stats.map((s) => (
                <div className={`card ${styles.statCard}`} key={s.lbl}>
                  <StatNumber value={s.num} active={stats.inView} />
                  <dd className={styles.statLbl}>{s.lbl}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
