import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV } from '@/data/nav';
import data from '@/data/data.json';
import { useUi } from '@/app/providers/UiProvider';
import { useScrollSpy } from '@/shared/hooks/useScrollSpy';
import { scrollToId } from '@/shared/lib/scrollToId';
import { IcArrowRight, IcMenu, IcMoon, IcSun } from '@/shared/icons';
import { MobileDrawer } from './MobileDrawer';
import styles from './Navigation.module.css';

export function Navigation() {
  const { theme, toggleTheme } = useUi();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const ids = useMemo(() => NAV.map((n) => n.id), []);
  const active = useScrollSpy(ids);
  const onMainPage = location.pathname === '/';

  const jump = (id: string, behavior: ScrollBehavior = 'smooth') => {
    if (onMainPage) {
      scrollToId(id, behavior);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <>
      <nav className={styles.nav} aria-label="Primary">
        <a
          className={styles.brand}
          href="/#top"
          onClick={(e) => {
            e.preventDefault();
            jump('top');
          }}
        >
          <span className={styles.dot} aria-hidden="true" />
          <span>{data.nameInc}</span>
        </a>
        <ul className={styles.links}>
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`/#${n.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  jump(n.id);
                }}
                className={`${styles.link} ${onMainPage && active === n.id ? styles.active : ''}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <IcSun width={16} height={16} /> : <IcMoon width={16} height={16} />}
          </button>
          <a className={styles.cta} href={`mailto:${data.email}`}>
            Get in touch <IcArrowRight width={14} height={14} />
          </a>
          <button
            type="button"
            className={`icon-btn ${styles.menuBtn}`}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <IcMenu width={18} height={18} />
          </button>
        </div>
      </nav>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onJump={jump} />
    </>
  );
}
