import type { CSSProperties } from 'react';
import data from '@/data/data.json';
import { SectionHead } from '@/shared/ui/SectionHead';
import { useReveal } from '@/shared/hooks/useReveal';
import styles from './Stack.module.css';

export function Stack() {
  const ref = useReveal();
  return (
    <section id="Stack" aria-label="Tooling stack">
      <div className="shell" ref={ref}>
        <SectionHead
          label={data.stack.label}
          title={data.stack.title}
          accent={data.stack.accent}
          caption={data.stack.caption}
        />
        <ul className={styles.grid}>
          {data.stack.items.map((s, i) => (
            <li
              className={`card reveal ${styles.skillCard}`}
              style={{ '--i': Math.min(i, 6) } as CSSProperties}
              key={s.label}
            >
              <div className={styles.icon}>
                <img src={s.img} alt="" draggable="false" loading="lazy" decoding="async" />
              </div>
              <div className={styles.label}>
                <span className={styles.name}>{s.label}</span>
                <span className={styles.tag}>{s.group}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
