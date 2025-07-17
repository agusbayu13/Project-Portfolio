function setDarkModeInput(input, checked) {
  input.checked = checked;
  if (checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
const toggleInput = document.getElementById('toggle-dark');
const toggleInputMobile = document.getElementById('toggle-dark-mobile');
const isDark = localStorage.getItem('theme') === 'dark';
if (toggleInput) setDarkModeInput(toggleInput, isDark);
if (toggleInputMobile) setDarkModeInput(toggleInputMobile, isDark);

if (toggleInput) {
  toggleInput.addEventListener('change', function() {
    setDarkModeInput(toggleInput, toggleInput.checked);
    if (toggleInputMobile) setDarkModeInput(toggleInputMobile, toggleInput.checked);
  });
}
if (toggleInputMobile) {
  toggleInputMobile.addEventListener('change', function() {
    setDarkModeInput(toggleInputMobile, toggleInputMobile.checked);
    if (toggleInput) setDarkModeInput(toggleInput, toggleInputMobile.checked);
  });
}

// Prevent real submit for demo
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out!');
      form.reset();
    });
  }
});