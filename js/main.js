/* ============================================================
   Weytara.tech — site interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  const OPEN_PATH = 'M6 18L18 6M6 6l12 12';
  const CLOSED_PATH = 'M4 6h16M4 12h16M4 18h16';

  function setMenu(open) {
    mobileMenu.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuIcon.setAttribute('d', open ? OPEN_PATH : CLOSED_PATH);
  }

  menuBtn.addEventListener('click', function () {
    setMenu(mobileMenu.classList.contains('hidden'));
  });

  // Close mobile menu when a link is tapped
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setMenu(false); });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) setMenu(false);
  });

  /* ---------- Header shadow on scroll ---------- */
  const header = document.getElementById('site-header');
  function onScroll() {
    if (window.scrollY > 10) {
      header.classList.add('shadow-lg', 'shadow-black/20');
    } else {
      header.classList.remove('shadow-lg', 'shadow-black/20');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Contact form ---------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  function setError(field, message) {
    const errorEl = document.querySelector('[data-error-for="' + field + '"]');
    const input = document.getElementById(field);
    if (errorEl) errorEl.textContent = message || '';
    if (input) input.classList.toggle('border-red-400', Boolean(message));
  }

  function validate() {
    let valid = true;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) { setError('name', 'Please enter your name.'); valid = false; }
    else setError('name', '');

    if (!email) { setError('email', 'Please enter your email.'); valid = false; }
    else if (!emailPattern.test(email)) { setError('email', 'Please enter a valid email.'); valid = false; }
    else setError('email', '');

    if (!message) { setError('message', 'Please tell us about your project.'); valid = false; }
    else if (message.length < 10) { setError('message', 'A little more detail would help (10+ characters).'); valid = false; }
    else setError('message', '');

    return valid;
  }

  // Clear a field's error as the user fixes it
  ['name', 'email', 'message'].forEach(function (field) {
    form[field].addEventListener('input', function () { setError(field, ''); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.classList.remove('hidden');

    if (!validate()) {
      status.textContent = 'Please fix the highlighted fields.';
      status.className = 'mt-4 text-center text-sm text-red-400';
      return;
    }

    // Demo submission — connect this to your backend or form service.
    status.textContent = 'Thanks! Your message is ready — connect a form endpoint to deliver it.';
    status.className = 'mt-4 text-center text-sm text-emerald-400';
    form.reset();
  });

  /* ---------- Current year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
