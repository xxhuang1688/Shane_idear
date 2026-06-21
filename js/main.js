/* ============================================
   山河株式会社 | SANKA CO., LTD.
   Minimal JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ===== Header scroll effect ===== */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  /* ===== Mobile menu toggle ===== */
  const menuBtn = document.querySelector('.menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      const icon = menuBtn.querySelector('svg');
      if (mobileNav.classList.contains('open')) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });
  }

  /* ===== Contact form ===== */
  const contactForm = document.querySelector('.contact-form');
  const formSuccess = document.querySelector('.form-success');
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
    });
  }
});
