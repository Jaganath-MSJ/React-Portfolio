import { Link } from 'react-router-dom';
import data from '@/data/data.json';
import { IcArrowRight } from '@/shared/icons';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <section className={styles.wrap} aria-label="Page not found">
      <div className="shell">
        <p className={styles.code}>404</p>
        <h1>
          {data.notFound.title} <span className={styles.accent}>{data.notFound.accent}</span>
        </h1>
        <p className={styles.caption}>{data.notFound.caption}</p>
        <Link to="/" className="btn btn-ghost">
          Back home <IcArrowRight width={14} height={14} className="arrow" />
        </Link>
      </div>
    </section>
  );
}
