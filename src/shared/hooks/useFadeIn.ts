import { useEffect, useRef } from 'react';

/**
 * Adds `.fade-in` then `.visible` once the element scrolls into view.
 * IntersectionObserver is the primary trigger; a passive scroll fallback
 * catches fast scrolls where IO samples skip the element entirely
 * (flick scrolls, Ctrl+End, find-in-page) — content must never stay hidden.
 */
export function useFadeIn<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('fade-in');

    let obs: IntersectionObserver | null = null;
    const reveal = () => {
      el.classList.add('visible');
      obs?.disconnect();
      window.removeEventListener('scroll', check);
    };
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 || r.bottom < window.innerHeight) reveal();
    };

    obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) reveal();
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    window.addEventListener('scroll', check, { passive: true });
    check(); // already in view on mount

    return () => {
      obs?.disconnect();
      window.removeEventListener('scroll', check);
    };
  }, []);

  return ref;
}
