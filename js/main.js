$(document).ready(function() {

  // Anchor link smooth scroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 60
      }, 800);
    }
  });

  // Form validation & submission
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    if (name && email && message) {
      alert('Köszönjük! Az üzenet elküldve. Hamarosan felvesszük Veled a kapcsolatot!');
      this.reset();
    } else {
      alert('Kérlek, töltsd ki az összes mezőt!');
    }
  });

  // CTA button actions
  $('.btn-primary, .btn-secondary').on('click', function() {
    const $this = $(this);
    $this.css('transform', 'scale(0.95)').delay(100).queue(function(next) {
      $(this).css('transform', '');
      next();
    });
    // TODO: Link to booking system or scroll to form
  });

});
