// About section: animation-on-scroll trigger, smooth and only once
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about.section-animate");
  if (!aboutSection) return;
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
});
