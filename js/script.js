// Hero carousel
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".toggle-icon");

    // Auto-open first FAQ
    if (index === 0) {
      item.classList.add("active");
      icon.textContent = "−";
    }

    question.addEventListener("click", () => {
      // Toggle the clicked FAQ only
      const isActive = item.classList.contains("active");
      if (isActive) {
        item.classList.remove("active");
        icon.textContent = "+";
      } else {
        item.classList.add("active");
        icon.textContent = "−";
      }
    });
  });
});
