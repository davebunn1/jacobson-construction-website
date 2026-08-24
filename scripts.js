/* Jacobson Construction & Design — shared scripts (pitch mockup) */
(function () {
  'use strict';

  /* Mobile nav toggle */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    /* Close menu when a link is tapped */
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Lightbox */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('.lightbox-img');
    var lightboxCaption = lightbox.querySelector('.lightbox-caption');
    document.querySelectorAll('[data-lightbox]').forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        var cap = item.getAttribute('data-caption') || '';
        if (img && lightboxImg) {
          lightboxImg.src = img.getAttribute('src');
          lightboxImg.alt = img.getAttribute('alt') || '';
        }
        if (lightboxCaption) lightboxCaption.textContent = cap;
        document.body.classList.add('lightbox--open');
      });
    });
    function closeLightbox() { document.body.classList.remove('lightbox--open'); }
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) closeLightbox();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
  }

  /* Estimate form — demo submit (no backend; shows success message) */
  var form = document.getElementById('estimate-form');
  if (form) {
    var success = document.getElementById('form-success');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (success) success.classList.add('show');
      form.reset();
    });
  }
})();
