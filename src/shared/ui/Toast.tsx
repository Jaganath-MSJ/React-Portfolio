import styles from './Toast.module.css';

export function Toast({ msg }: { msg: string }) {
  return (
    <div className={`${styles.toast} ${msg ? styles.show : ''}`} role="status" aria-live="polite">
      <span className={styles.dot} aria-hidden="true" />
      {msg}
    </div>
  );
}
