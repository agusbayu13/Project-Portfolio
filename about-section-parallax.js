// About section: animation-on-scroll + parallax photo
document.addEventListener("DOMContentLoaded", function () {
  // Scroll/triggered animation
  const aboutSection = document.querySelector(".about.section-animate");
  if (aboutSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSection.classList.add("in-view");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    observer.observe(aboutSection);
  }

  // Parallax effect for photo
  const parallax = document.querySelector(".parallax-photo");
  if (!parallax) return;

  // Mouse parallax (desktop)
  parallax.addEventListener("mousemove", function (e) {
    const rect = parallax.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;
    parallax.style.transform = `rotateY(${-12 * xPercent}deg) rotateX(${
      10 * yPercent
    }deg) scale(1.05)`;
  });
  parallax.addEventListener("mouseleave", function () {
    parallax.style.transform = "rotateY(0) rotateX(0) scale(1)";
  });

  // Parallax on scroll (mobile)
  window.addEventListener("scroll", function () {
    if (window.innerWidth < 800) {
      const rect = parallax.getBoundingClientRect();
      const windowH = window.innerHeight;
      const scrollPercent =
        (rect.top + rect.height / 2 - windowH / 2) / windowH;
      parallax.style.transform = `translateY(${
        scrollPercent * 28
      }px) scale(1.02)`;
    }
  });
});
