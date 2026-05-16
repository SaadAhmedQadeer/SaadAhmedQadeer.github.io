/* Saad Ahmed Qadeer — portfolio scripts (vanilla, no deps) */

(() => {
  'use strict';

  /* ── Footer year ─────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Sticky nav border on scroll ─────────────────── */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile menu ─────────────────────────────────── */
  const menuBtn = document.getElementById('navMenu');
  const drawer  = document.getElementById('navDrawer');
  if (menuBtn && drawer) {
    const close = () => {
      nav.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      drawer.hidden = true;
    };
    const open = () => {
      nav.classList.add('is-open');
      menuBtn.setAttribute('aria-expanded', 'true');
      drawer.hidden = false;
    };
    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      isOpen ? close() : open();
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) close();
    });
  }

  /* ── Reveal-on-scroll for sections ──────────────── */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const candidates = document.querySelectorAll('.section__head, .about, .skill-group, .project, .course, .award, .contact, .hero__stats');
  candidates.forEach(el => el.setAttribute('data-reveal', ''));

  if (reduceMotion || !('IntersectionObserver' in window)) {
    candidates.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small stagger when multiple enter together
          const delay = Math.min(i * 60, 240);
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    candidates.forEach(el => io.observe(el));
  }

  /* ── Active nav link on scroll ─────────────────── */
  const navLinks = document.querySelectorAll('.nav__links a');
  const sections = [...navLinks]
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      navLinks.forEach(a => {
        const match = a.getAttribute('href') === `#${id}`;
        a.style.color = match ? 'var(--text)' : '';
      });
    };
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => io2.observe(s));
  }
})();
