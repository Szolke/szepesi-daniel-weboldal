$(document).ready(function() {

  const NAVBAR_OFFSET = 60; // a fixed #navbar magassága, ennyivel feljebb állunk meg

  // Közös smooth scroll – a navbar anchor linkek és a hero CTA gombok is ezt használják
  function smoothScrollTo(selector, onComplete) {
    if (!selector || selector === '#') {
      return;
    }
    const target = $(selector);
    if (!target.length) {
      return;
    }
    $('html, body').stop().animate({
      scrollTop: target.offset().top - NAVBAR_OFFSET
    }, 800).promise().done(function() {
      if (onComplete) {
        onComplete();
      }
    });
  }

  // Anchor link smooth scroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    smoothScrollTo(this.getAttribute('href'));
  });

  // Hero CTA gombok – <button> elemek, ezért kézzel navigálunk
  $('.cta-buttons .btn-primary').on('click', function() {
    smoothScrollTo('#contact', function() {
      $('#name').trigger('focus');
    });
  });

  $('.cta-buttons .btn-secondary').on('click', function() {
    smoothScrollTo('#coaching');
  });

  // Form validation & submission
  $('#contact-form').on('submit', function(e) {
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Kérlek, töltsd ki az összes mezőt!');
      return;
    }

    // Nincs preventDefault és nincs reset sem: a böngésző így tudja megnyitni
    // a mailto: hivatkozást a kitöltött mezők tartalmával.
    alert('Megnyitjuk az email kliensedet az üzeneteddel – kérlek onnan küldd el.');
  });

  // CTA button actions
  $('.btn-primary, .btn-secondary').on('click', function() {
    const $this = $(this);
    $this.css('transform', 'scale(0.95)').delay(100).queue(function(next) {
      $(this).css('transform', '');
      next();
    });
  });

});
