const NAV_OFFSET = 80;

/**
 * Scrolls to a section id, offset for the fixed nav. "top" scrolls to page top.
 * `behavior: "instant"` is used by the mobile drawer — the full-screen drawer
 * covers the viewport while closing, so an instant jump reads as a reveal and
 * avoids the browser cancelling long smooth-scroll animations mid-transition.
 */
export function scrollToId(id: string, behavior: ScrollBehavior = 'smooth') {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior });
  }
}
