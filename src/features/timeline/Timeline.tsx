import { useMemo, useState, type CSSProperties } from 'react';
import data from '@/data/data.json';
import { SectionHead } from '@/shared/ui/SectionHead';
import { useReveal } from '@/shared/hooks/useReveal';
import styles from './Timeline.module.css';

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'work', label: 'Work' },
  { id: 'edu', label: 'Education' },
] as const;

type TabId = (typeof TABS)[number]['id'];

export function Timeline() {
  const [tab, setTab] = useState<TabId>('all');
  const ref = useReveal();

  const rows = useMemo(() => {
    if (tab === 'all') return data.timeline.items;
    return data.timeline.items.filter((r) => r.kind === tab);
  }, [tab]);

  return (
    <section id="Timeline" aria-label="Timeline">
      <div className="shell" ref={ref}>
        <SectionHead
          label={data.timeline.label}
          title={data.timeline.title}
          accent={data.timeline.accent}
          caption={data.timeline.caption}
        />
        <div className={`reveal ${styles.tabs}`} role="tablist" aria-label=" filter">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={tab === t.id ? styles.active : ''}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <ol className={styles.timeline} aria-live="polite">
          {rows.map((r, i) => (
            <li
              className={`card reveal ${styles.row}`}
              style={{ '--i': Math.min(i + 1, 6) } as CSSProperties}
              key={`${r.role}-${i}`}
            >
              <span className={styles.date}>
                {r.from} <span className={styles.sep}>→</span>{' '}
                {r.to ? r.to : <span className={styles.now}>Present</span>}
              </span>
              <div className={styles.body}>
                <h3>{r.role}</h3>
                <p className={styles.org}>{r.org}</p>
              </div>
              <span className={`${styles.badge} ${r.to ? '' : styles.live}`}>{r.type}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
