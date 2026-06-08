import data from '@/data/data.json';
import { SectionHead } from '@/shared/ui/SectionHead';
import { useFadeIn } from '@/shared/hooks/useFadeIn';
import styles from './Stack.module.css';

export function Stack() {
  const ref = useFadeIn();
  return (
    <section id="Stack" aria-label="Tooling stack">
      <div className="shell" ref={ref}>
        <SectionHead
          label="03 — Stack"
          title="Tools I"
          accent="reach for."
          caption="The day-to-day toolkit — components I've shipped in production, plus the systems I lean on around them."
        />
        <ul className={styles.grid}>
          {data.Skills.map((s) => (
            <li className={`card ${styles.skillCard}`} key={s.label}>
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
