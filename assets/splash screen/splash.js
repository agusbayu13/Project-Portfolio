// Splash screen fade out after load
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('splash-screen').classList.add('hide');
    setTimeout(function() {
      document.getElementById('splash-screen').style.display = 'none';
    }, 800);
  }, 1400); // Adjust delay as needed
});