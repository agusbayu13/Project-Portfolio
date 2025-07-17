function animateOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view"); // reset animasi saat keluar viewport
        }
      });
    },
    { threshold: 0.14 }
  );

  // Animate hero
  const hero = document.querySelector(".hero");
  if (hero) observer.observe(hero);

  // Animate section blocks
  document
    .querySelectorAll(".section-animate")
    .forEach((sec) => observer.observe(sec));
  // Animate skills cards
  document
    .querySelectorAll(".skill-card")
    .forEach((card) => observer.observe(card));
  // Animate works cards
  document
    .querySelectorAll(".works-grid .work-card")
    .forEach((card) => observer.observe(card));
  // Animate testimonials
  document
    .querySelectorAll(".testimonials-list blockquote")
    .forEach((card) => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", animateOnScroll);
