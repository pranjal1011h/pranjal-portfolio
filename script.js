// ===============================
// STATIC TYPING TEXT
// ===============================

const typing = document.getElementById("typing");

if (typing) {
  typing.textContent = "Python development";
}


// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});


// ===============================
// MOBILE MENU
// ===============================

const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menu && navbar) {
  menu.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
}


// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar) {
      navbar.classList.remove("open");
    }
  });
});