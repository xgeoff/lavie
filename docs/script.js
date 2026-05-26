const nav = document.querySelector("#site-nav");
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");
const links = navLinks ? navLinks.querySelectorAll("a") : [];

const syncNav = () => {
  if (!nav) {
    return;
  }

  nav.classList.toggle("scrolled", window.scrollY > 60);
};

syncNav();
window.addEventListener("scroll", syncNav, { passive: true });

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 },
);

revealItems.forEach((item) => observer.observe(item));

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
