// Retracting bar: hides on scroll down, returns on scroll up.
(() => {
  const bar = document.querySelector('.bar');
  if (!bar) return;
  let y0 = scrollY;
  addEventListener('scroll', () => {
    const y = scrollY;
    bar.classList.toggle('is-hidden', y > y0 && y > 240 && !bar.contains(document.activeElement));
    y0 = y;
  }, { passive: true });
})();

// Footer columns: open on desktop, collapsed accordions on mobile (open by default without script).
(() => {
  const cols = document.querySelectorAll('.fcol');
  if (!cols.length) return;
  const mq = matchMedia('(max-width: 40rem)');
  const sync = () => cols.forEach((d) => { d.open = !mq.matches; });
  sync();
  mq.addEventListener('change', sync);
})();
