// Burger menu show/hide with separate close button for mobile
document.addEventListener('DOMContentLoaded', function() {
  var burger = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuCloseBtn = document.getElementById('menuCloseBtn');
  // Open menu
  burger.addEventListener('click', function() {
    mobileMenu.classList.add('show');
    burger.setAttribute('aria-expanded', 'true');
  });
  // Close menu (close button)
  menuCloseBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('show');
    burger.setAttribute('aria-expanded', 'false');
  });
  // Optional: close menu on link click (mobile)
  mobileMenu.querySelectorAll('.navbar-link').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
});