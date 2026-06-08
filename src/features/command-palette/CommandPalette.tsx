import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV } from '@/data/nav';
import data from '@/data/data.json';
import { useUi } from '@/app/providers/UiProvider';
import { scrollToId } from '@/shared/lib/scrollToId';
import {
  IcArrowRight,
  IcCopy,
  IcDownload,
  IcGithub,
  IcLinkedIn,
  IcMail,
  IcMoon,
  IcSearch,
  IcSun,
  IcTelegram,
} from '@/shared/icons';
import styles from './CommandPalette.module.css';

interface Command {
  group: string;
  label: string;
  hint?: string;
  icon: ReactNode;
  keywords?: string;
  run: () => void;
}

export function CommandPalette() {
  const { paletteOpen: open, setPaletteOpen, theme, toggleTheme, copy } = useUi();
  const [q, setQ] = useState('');
  const [focusIdx, setFocusIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const onClose = () => setPaletteOpen(false);

  const jump = (id: string) => {
    if (location.pathname === '/') {
      scrollToId(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const baseItems = useMemo<Command[]>(() => {
    const nav: Command[] = NAV.map((n) => ({
      group: 'Navigation',
      label: `Go to ${n.label}`,
      hint: n.num,
      icon: <IcArrowRight width={14} height={14} />,
      keywords: n.label.toLowerCase(),
      run: () => {
        jump(n.id);
        onClose();
      },
    }));
    const ext: Command[] = [
      {
        group: 'External',
        label: 'LinkedIn',
        hint: 'Open profile',
        icon: <IcLinkedIn width={14} height={14} />,
        keywords: 'linkedin profile',
        run: () => {
          window.open(data.linkedInLink, '_blank');
          onClose();
        },
      },
      {
        group: 'External',
        label: 'GitHub',
        hint: 'Open profile',
        icon: <IcGithub width={14} height={14} />,
        keywords: 'github code repo',
        run: () => {
          window.open(data.githubLink, '_blank');
          onClose();
        },
      },
      {
        group: 'External',
        label: 'Telegram',
        hint: 'Send a message',
        icon: <IcTelegram width={14} height={14} />,
        keywords: 'telegram chat',
        run: () => {
          window.open(data.telegramLink, '_blank');
          onClose();
        },
      },
      {
        group: 'External',
        label: 'Email Jaganath',
        hint: data.email,
        icon: <IcMail width={14} height={14} />,
        keywords: 'email mail contact',
        run: () => {
          window.location.href = `mailto:${data.email}`;
          onClose();
        },
      },
      {
        group: 'External',
        label: 'Download résumé',
        hint: 'PDF',
        icon: <IcDownload width={14} height={14} />,
        keywords: 'resume cv pdf',
        run: () => {
          window.open(data.resume, '_blank');
          onClose();
        },
      },
    ];
    const appearance: Command[] = [
      {
        group: 'Appearance',
        label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`,
        hint: 'Toggle',
        icon: theme === 'dark' ? <IcSun width={14} height={14} /> : <IcMoon width={14} height={14} />,
        keywords: 'theme dark light mode appearance',
        run: () => {
          toggleTheme();
        },
      },
      {
        group: 'Appearance',
        label: 'Copy email address',
        hint: data.email,
        icon: <IcCopy width={14} height={14} />,
        keywords: 'copy email clipboard',
        run: () => {
          copy(data.email, 'email');
          onClose();
        },
      },
    ];
    return [...nav, ...ext, ...appearance];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, location.pathname]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return baseItems;
    return baseItems.filter(
      (it) =>
        it.label.toLowerCase().includes(term) ||
        (it.hint && String(it.hint).toLowerCase().includes(term)) ||
        (it.keywords && it.keywords.includes(term))
    );
  }, [q, baseItems]);

  useEffect(() => {
    setFocusIdx(0);
  }, [q, open]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusIdx((i) => Math.min(filtered.length - 1, i + 1));
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusIdx((i) => Math.max(0, i - 1));
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        filtered[focusIdx]?.run();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, focusIdx, filtered]);

  const grouped = useMemo(() => {
    const out: { group: string; items: Command[] }[] = [];
    const seen: Record<string, { group: string; items: Command[] }> = {};
    filtered.forEach((it) => {
      if (!seen[it.group]) {
        seen[it.group] = { group: it.group, items: [] };
        out.push(seen[it.group]);
      }
      seen[it.group].items.push(it);
    });
    return out;
  }, [filtered]);

  let globalIdx = 0;
  return (
    <div
      className={`${styles.overlay} ${open ? styles.show : ''}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      aria-hidden={!open}
    >
      <div className={styles.palette} role="combobox" aria-expanded={open} aria-controls="palette-list">
        <div className={styles.inputRow}>
          <IcSearch width={16} height={16} className={styles.inputIcon} />
          <input
            ref={inputRef}
            className={styles.input}
            placeholder="Type a command or search…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search commands"
            autoComplete="off"
            spellCheck="false"
          />
          <kbd>ESC</kbd>
        </div>
        <div className={styles.list} id="palette-list" role="listbox">
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              No results for <strong>"{q}"</strong>
            </div>
          ) : (
            grouped.map((g) => (
              <div key={g.group}>
                <div className={styles.section}>{g.group}</div>
                {g.items.map((it) => {
                  const idx = globalIdx++;
                  return (
                    <button
                      key={`${g.group}-${it.label}`}
                      type="button"
                      role="option"
                      aria-selected={idx === focusIdx}
                      className={`${styles.item} ${idx === focusIdx ? styles.focused : ''}`}
                      onClick={() => it.run()}
                      onMouseMove={() => setFocusIdx(idx)}
                    >
                      <span className={styles.lead}>
                        <span className={styles.itemIcon}>{it.icon}</span>
                        <span>{it.label}</span>
                      </span>
                      <span className={styles.hint}>{it.hint}</span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
        <div className={styles.footRow}>
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> Navigate
          </span>
          <span>
            <kbd>↵</kbd> Select
          </span>
          <span>
            <kbd>ESC</kbd> Close
          </span>
        </div>
      </div>
    </div>
  );
}
