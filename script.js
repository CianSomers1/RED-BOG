const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const programmeData = {
  intro: { eyebrow: "Beginner friendly", title: "Intro to Padel", copy: "Learn scoring, court position, glass rebounds, serve basics, and the first tactical patterns that make padel click. Equipment is included." },
  league: { eyebrow: "Competitive edge", title: "League Lab", copy: "A coached match-play session for players who want cleaner transitions, smarter lobs, and calmer decisions when the rally gets fast." },
  women: { eyebrow: "Weekly social", title: "Women on Court", copy: "Welcoming coached games, rotating partners, and clubhouse time afterwards. Built for newer players and confident improvers alike." },
  junior: { eyebrow: "Future players", title: "Junior Bog Squad", copy: "Fun movement, racket skills, soft competition, and confidence-building games for young players finding their first padel rhythm." },
};

document.querySelectorAll(".programme").forEach((button) => {
  button.addEventListener("click", () => {
    const selected = programmeData[button.dataset.programme];
    document.querySelectorAll(".programme").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#programme-eyebrow").textContent = selected.eyebrow;
    document.querySelector("#programme-title").textContent = selected.title;
    document.querySelector("#programme-copy").textContent = selected.copy;
  });
});
