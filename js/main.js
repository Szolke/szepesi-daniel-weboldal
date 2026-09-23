document.addEventListener('DOMContentLoaded', function() {

  // Nav dropdown: kattintásra nyit/zár, kívülre kattintva bezárul
  document.querySelectorAll('.nav-dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggle.closest('.nav-dropdown').classList.toggle('is-open');
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('.nav-dropdown.is-open').forEach(function(dropdown) {
      dropdown.classList.remove('is-open');
    });
  });

  // Form validation & submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Kérlek, töltsd ki az összes mezőt!');
        return;
      }

      // Nincs preventDefault és nincs reset sem: a böngésző így tudja megnyitni
      // a mailto: hivatkozást a kitöltött mezők tartalmával.
      alert('Megnyitjuk az email kliensedet az üzeneteddel – kérlek onnan küldd el.');
    });
  }

  // CTA button actions
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(function(btn) {
    btn.addEventListener('click', function() {
      btn.style.transform = 'scale(0.95)';
      setTimeout(function() {
        btn.style.transform = '';
      }, 100);
    });
  });

});
