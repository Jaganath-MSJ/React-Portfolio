import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export function RoleRotator({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI((i + 1) % words.length), interval);
    return () => clearTimeout(t);
  }, [i, words.length, interval]);

  return (
    <span className={styles.rotator}>
      <span key={i} className={styles.rotatorWord}>
        {words[i]}
      </span>
    </span>
  );
}
