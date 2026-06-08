import { Link } from 'react-router-dom';
import { IcArrowRight } from '@/shared/icons';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <section className={styles.wrap} aria-label="Page not found">
      <div className="shell">
        <p className={styles.code}>404</p>
        <h1>
          This page doesn't <span className={styles.accent}>exist.</span>
        </h1>
        <p className={styles.caption}>The link may be broken, or the page may have moved.</p>
        <Link to="/" className="btn btn-ghost">
          Back home <IcArrowRight width={14} height={14} className="arrow" />
        </Link>
      </div>
    </section>
  );
}
