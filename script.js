(function() {
  'use strict';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = (i * 0.08) + 's';
    observer.observe(card);
  });

  const pills = document.querySelectorAll('.cloud span');
  pills.forEach((pill, i) => {
    pill.style.transitionDelay = (i * 0.03) + 's';
    observer.observe(pill);
  });

  /* active nav link — dynamic nav height */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav .links a');
  const navEl = document.querySelector('nav');

  let navObserver;
  function createNavObserver() {
    if (navObserver) navObserver.disconnect();
    const navHeight = navEl.offsetHeight;
    navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-' + navHeight + 'px 0px 0px 0px' });
    sections.forEach(s => navObserver.observe(s));
  }

  if (navEl) {
    createNavObserver();

    const resizeObserver = new ResizeObserver(function() {
      createNavObserver();
    });
    resizeObserver.observe(navEl);
  }

  /* back to top */
  const backBtn = document.querySelector('#back-to-top');
  const hero = document.querySelector('#hero');
  if (backBtn && hero) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        backBtn.classList.toggle('show', !entry.isIntersecting);
      });
    }, { threshold: [0, 0.1] });
    heroObserver.observe(hero);
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
