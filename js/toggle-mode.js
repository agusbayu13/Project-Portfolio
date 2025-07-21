const btn = document.getElementById("modeSwitchBtn");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const userPref = localStorage.getItem("theme");
const body = document.body;

// Init mode
if (userPref === "dark" || (!userPref && prefersDark))
  body.classList.add("dark");

// Switch mode
btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
});
