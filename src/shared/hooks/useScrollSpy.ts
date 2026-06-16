import { useEffect, useState } from 'react';

/** Tracks the most visible section id via IntersectionObserver. */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const seen = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.intersectionRatio));
        let best: string | null = null;
        let ratio = -1;
        seen.forEach((r, id) => {
          if (r > ratio) {
            ratio = r;
            best = id;
          }
        });
        if (best && ratio > 0) setActive(best);
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: '-80px 0px -40% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);

  return active;
}
