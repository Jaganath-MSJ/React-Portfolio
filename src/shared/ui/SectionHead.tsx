import styles from './SectionHead.module.css';

interface SectionHeadProps {
  label: string;
  title: string;
  accent?: string;
  caption?: string;
}

export function SectionHead({ label, title, accent, caption }: SectionHeadProps) {
  return (
    <header className={styles.head}>
      <span className={styles.label}>{label}</span>
      <h2>
        {title}
        {accent && (
          <>
            {' '}
            <span className={styles.accent}>{accent}</span>
          </>
        )}
      </h2>
      {caption && <p className={styles.caption}>{caption}</p>}
    </header>
  );
}
