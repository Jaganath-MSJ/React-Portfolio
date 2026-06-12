import data from '@/data/data.json';
import { scrollToId } from '@/shared/lib/scrollToId';
import { IcArrowUR, IcArrowUp } from '@/shared/icons';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.foot}>
      <div className="shell">
        <div className={styles.top}>
          <h2 className={styles.display}>
            Let's work <span className={styles.accent}>together.</span>
          </h2>
          <div className={styles.side}>
            <a href={`mailto:${data.email}`}>
              {data.email} <IcArrowUR width={11} height={11} className={styles.arrow} />
            </a>
            <a href={data.linkedInLink} target="_blank" rel="noreferrer">
              LinkedIn <IcArrowUR width={11} height={11} className={styles.arrow} />
            </a>
            <a href={data.githubLink} target="_blank" rel="noreferrer">
              GitHub <IcArrowUR width={11} height={11} className={styles.arrow} />
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} {data.nameInc} · Built with React
          </span>
          <button type="button" className={styles.topBtn} onClick={() => scrollToId('top')} aria-label="Back to top">
            Back to top <IcArrowUp width={12} height={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
