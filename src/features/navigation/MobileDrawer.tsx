import { useEffect } from 'react';
import { NAV } from '@/data/nav';
import data from '@/data/data.json';
import { IcX } from '@/shared/icons';
import styles from './MobileDrawer.module.css';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  onJump: (id: string, behavior?: ScrollBehavior) => void;
}

export function MobileDrawer({ open, onClose, onJump }: MobileDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`${styles.menu} ${open ? styles.show : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <button type="button" className={`icon-btn ${styles.close}`} onClick={onClose} aria-label="Close menu">
        <IcX width={20} height={20} />
      </button>
      <div className={styles.list}>
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`/#${n.id}`}
            onClick={(e) => {
              e.preventDefault();
              onClose();
              // jump instantly behind the closing drawer (it covers the viewport,
              // so the page is revealed already at the target section)
              setTimeout(() => onJump(n.id, 'instant'), 60);
            }}
          >
            <span className={styles.num}>{n.num}</span>
            {n.label}
          </a>
        ))}
      </div>
      <div className={styles.foot}>
        <a href={data.profile.linkedInLink} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={data.profile.githubLink} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${data.profile.email}`}>Email</a>
      </div>
    </div>
  );
}
