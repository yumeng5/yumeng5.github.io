// Focus-visible polyfill for better keyboard navigation
// Adds .focus-visible class when element should show focus outline
(function() {
  'use strict';

  // Track if we're currently navigating with keyboard
  let hadKeyboardEvent = true;
  let keyboardThrottleId = 0;

  const keyboardEventTypes = [
    'keydown',
    'keyup',
    'keypress'
  ];

  const pointerEventTypes = [
    'mousedown',
    'mouseup',
    'pointermove',
    'pointerdown',
    'pointerup',
    'touchmove',
    'touchstart',
    'touchend'
  ];

  // Add class to body for CSS targeting
  document.body.classList.add('js-focus-visible');

  function onKeyboardEvent(e) {
    hadKeyboardEvent = true;
  }

  function onPointerEvent(e) {
    hadKeyboardEvent = false;
  }

  function onFocus(e) {
    if (hadKeyboardEvent || e.target.matches(':focus-visible')) {
      e.target.classList.add('focus-visible');
    }
  }

  function onBlur(e) {
    e.target.classList.remove('focus-visible');
  }

  // Listen for keyboard events
  keyboardEventTypes.forEach(function(type) {
    document.addEventListener(type, onKeyboardEvent, true);
  });

  // Listen for pointer events
  pointerEventTypes.forEach(function(type) {
    document.addEventListener(type, onPointerEvent, true);
  });

  // Listen for focus/blur events
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);

  // Enhanced link interactions for academic content
  document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add loading indicators for external paper links
    const paperLinks = document.querySelectorAll('a[href*="arxiv.org"], a[href*="doi.org"]');
    paperLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        setTimeout(() => {
          this.style.opacity = '1';
        }, 300);
      });
    });
  });
})();
