import { useEffect, useState } from 'react';

/** ⌘K / Ctrl+K global toggle for the command palette. */
export function usePalette() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isModK = (e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K');
      if (isModK) {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return { paletteOpen, setPaletteOpen };
}

/** "⌘" on Apple platforms, "Ctrl+" elsewhere — for kbd hints. */
export const KBD_MOD =
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent)
    ? '⌘'
    : 'Ctrl+';
