document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  if (form && successMessage) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const contactInput = form.querySelector('#contact');
      const contactValue = contactInput ? contactInput.value.trim() : '';

      if (contactValue.length < 5) {
        successMessage.textContent = 'Please enter a valid phone number or email address.';
        successMessage.style.color = '#b22a48';
        return;
      }

      successMessage.textContent = 'Thanks! Your enquiry has been received. We will be in touch shortly.';
      successMessage.style.color = '#267a3e';
      form.reset();
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) submitButton.blur();
    });
  }

  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('site-nav');

  if (mobileToggle && header) {
    mobileToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('active');
    });

    if (nav) {
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          if (header.classList.contains('active')) {
            header.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const accordionButtons = document.querySelectorAll('.accordion-trigger');

  accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      accordionButtons.forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.nextElementSibling.classList.remove('open');
      });

      if (!isOpen) {
        button.setAttribute('aria-expanded', 'true');
        button.nextElementSibling.classList.add('open');
      }
    });
  });
});