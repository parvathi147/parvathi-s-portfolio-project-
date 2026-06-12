const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show'));
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

const roles = [
  "I build responsive, modern, and elegant web experiences.",
  "I create clean UI with strong visual impact.",
  "I love turning ideas into interactive websites."
];

let i = 0;
const typingText = document.querySelector('.typing-text');

setInterval(() => {
  i = (i + 1) % roles.length;
  typingText.textContent = roles[i];
}, 2500);


document.addEventListener("DOMContentLoaded", () => {
  const socialToggleBtn = document.getElementById("socialToggleBtn");
  const socialMenu = document.getElementById("socialMenu");

  socialToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    socialMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".social-toggle")) {
      socialMenu.classList.remove("show");
    }
  });
});