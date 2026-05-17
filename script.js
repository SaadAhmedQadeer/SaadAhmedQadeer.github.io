/* Saad Ahmed Qadeer — portfolio v3 */

(() => {
  'use strict';

  /* ── Footer year ─────────────────────────────────── */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ── Theme toggle ─────────────────────────────────── */
  const html   = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  const stored = localStorage.getItem('saq-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  // Default to dark unless user explicitly prefers light AND has no stored preference
  const initial = stored ?? (prefersLight ? 'light' : 'dark');
  html.setAttribute('data-theme', initial);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('saq-theme', next);
    });
  }

  if (!stored && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!localStorage.getItem('saq-theme')) {
        html.setAttribute('data-theme', e.matches ? 'light' : 'dark');
      }
    });
  }

  /* ── Sticky-nav border ─────────────────────────────── */
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
  if (menuBtn && drawer && nav) {
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
      menuBtn.getAttribute('aria-expanded') === 'true' ? close() : open();
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) close();
    });
  }

  /* ── Reveal-on-scroll ─────────────────────────────── */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll(
    '.section__head, .about, .exp__item, .project, .teach__card, .award, .stack__group, .contact__email, .contact__socials'
  );
  targets.forEach(el => el.setAttribute('data-reveal', ''));

  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = Math.min(i * 50, 200);
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(el => io.observe(el));
  }

  /* ── Active nav link ─────────────────────────────── */
  const navLinks = document.querySelectorAll('.nav__links a');
  const sections = [...navLinks]
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
    };
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => io2.observe(s));
  }

  /* ── Photo fallback safety net ───────────────────── */
  // If image is missing, surface the SAQ monogram (inline handler may not fire in all environments)
  const photoWrap = document.querySelector('.hero__photo');
  if (photoWrap) {
    const img = photoWrap.querySelector('img');
    if (!img || !img.complete || img.naturalWidth === 0) {
      photoWrap.classList.add('hero__photo--empty');
    } else {
      img.addEventListener('error', () => photoWrap.classList.add('hero__photo--empty'));
    }
  }
})();
