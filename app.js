'use strict';
const calendar = document.querySelector('.calendar');
for (let i = 0; i < 21; i++) {
  const day = document.createElement('i');
  if (i < 6) day.className = 'done';
  calendar.appendChild(day);
}
const checkoutUrl = window.CORE21_CONFIG?.checkoutUrl?.trim();
const isValidCheckout = checkoutUrl && /^https?:\/\//i.test(checkoutUrl);
document.querySelectorAll('[data-checkout]').forEach(button => {
  if (isValidCheckout) button.removeAttribute('aria-disabled');
  button.addEventListener('click', () => {
    if (isValidCheckout) window.location.assign(checkoutUrl);
  });
});
