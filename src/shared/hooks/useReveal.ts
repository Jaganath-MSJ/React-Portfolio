import { useEffect, useRef } from 'react';
import { observeOnce } from '@/shared/lib/inView';

/**
 * Adds the global `.in-view` trigger class to the element once it scrolls into
 * view, which reveals any descendant `.reveal` items (staggered via `--i`).
 * The element itself is only a trigger — it does not hide. Backed by the
 * shared in-view observer.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeOnce(el, () => el.classList.add('in-view'));
  }, []);

  return ref;
}
