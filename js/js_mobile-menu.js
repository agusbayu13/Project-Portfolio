// mobile-menu.js
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobile-menu');
  burger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('show');
    burger.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  // Optional: Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      burger.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
});