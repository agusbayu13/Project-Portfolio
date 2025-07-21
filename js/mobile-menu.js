document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobile-menu');
  let isOpen = false;

  function openMenu() {
    mobileMenu.classList.add('show');
    burger.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    isOpen = true;
  }
  function closeMenu() {
    mobileMenu.classList.remove('show');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    isOpen = false;
  }
  if (burger && mobileMenu) {
    burger.addEventListener('click', function() {
      isOpen ? closeMenu() : openMenu();
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => closeMenu());
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape" && isOpen) closeMenu();
    });
    document.addEventListener('click', function(e) {
      if (isOpen && !mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        closeMenu();
      }
    });
  }
});