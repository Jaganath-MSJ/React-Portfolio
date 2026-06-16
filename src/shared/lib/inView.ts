/**
 * Shared in-view detection for scroll reveals.
 *
 * One module-level IntersectionObserver + one rAF-throttled scroll/resize
 * fallback serve every reveal on the page, instead of each hook spinning up
 * its own observer and scroll listener. The fallback exists because a
 * programmatic instant jump (Ctrl+End, find-in-page, fast flick) can leave IO
 * reporting only the final state and skip elements — without it, content can
 * stay hidden.
 *
 * `observeOnce(el, onEnter)` fires `onEnter` the first time `el` is in view,
 * then stops tracking it. Returns an unsubscribe for cleanup before first fire.
 */

type EnterCallback = () => void;

const callbacks = new Map<Element, EnterCallback>();
let observer: IntersectionObserver | null = null;
let fallbackBound = false;
let rafPending = false;

const VISIBLE_RATIO = 0.92;

function fire(el: Element) {
  const cb = callbacks.get(el);
  if (!cb) return;
  callbacks.delete(el);
  observer?.unobserve(el);
  cb();
  if (callbacks.size === 0) teardownFallback();
}

function isInView(el: Element) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * VISIBLE_RATIO || r.bottom < window.innerHeight;
}

function runFallback() {
  rafPending = false;
  // copy keys first — fire() mutates the map
  [...callbacks.keys()].forEach((el) => {
    if (isInView(el)) fire(el);
  });
}

function onScrollResize() {
  if (rafPending) return;
  rafPending = true;
  requestAnimationFrame(runFallback);
}

function setupFallback() {
  if (fallbackBound) return;
  fallbackBound = true;
  window.addEventListener('scroll', onScrollResize, { passive: true });
  window.addEventListener('resize', onScrollResize);
}

function teardownFallback() {
  if (!fallbackBound) return;
  fallbackBound = false;
  window.removeEventListener('scroll', onScrollResize);
  window.removeEventListener('resize', onScrollResize);
}

export function observeOnce(el: Element, onEnter: EnterCallback): () => void {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    onEnter();
    return () => {};
  }

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) fire(e.target);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );
  }

  callbacks.set(el, onEnter);
  observer.observe(el);
  setupFallback();
  if (isInView(el)) fire(el); // already visible on mount

  return () => {
    if (callbacks.delete(el)) {
      observer?.unobserve(el);
      if (callbacks.size === 0) teardownFallback();
    }
  };
}
