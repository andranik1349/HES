/* ── PROTOTYPE INTERACTIONS ────────────────────────────────────────
   prototype.js is prototype-only. Do not port to production.
   ─────────────────────────────────────────────────────────────────── */

/* Accordion */
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    item.classList.toggle('open');
  });
});

/* More dropdown in nav */
const moreBtn = document.querySelector('.nav-more-btn');
const moreMenu = document.querySelector('.nav-more-menu');
if (moreBtn && moreMenu) {
  moreBtn.addEventListener('click', e => {
    e.stopPropagation();
    moreMenu.classList.toggle('open');
  });
  document.addEventListener('click', () => moreMenu.classList.remove('open'));
}

/* Active nav link — resolve full pathname so sub-directory index files
   (library/index.html, blog/index.html) don't false-match when the
   current page is also named index.html. */
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (!href) return;
  try {
    const linkPath = new URL(href, window.location.href).pathname;
    if (linkPath === currentPath) link.classList.add('active');
  } catch (e) { /* ignore malformed hrefs */ }
});
