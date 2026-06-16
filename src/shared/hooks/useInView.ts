import { useEffect, useRef, useState } from 'react';
import { observeOnce } from '@/shared/lib/inView';

/**
 * Returns a ref + boolean that flips to true once the element scrolls into
 * view (and stays true), via the shared in-view observer.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeOnce(el, () => setInView(true));
  }, []);

  return { ref, inView };
}
