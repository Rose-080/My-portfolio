// Typing Effect
const roles = ["Frontend Developer", "UI/UX Designer", "Creative Thinker", "Problem Solver"];
let roleIndex = 0, charIndex = 0;
const typingElement = document.getElementById("typing");
function type() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (typingElement) type();
});

// Scroll Reveal
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeUp");
      observer.unobserve(entry.target);
    }
  });
});
revealElements.forEach(el => observer.observe(el));

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    navbar.classList.add('bg-white/20', 'backdrop-blur-md'); // subtle transparent background
  } else {
    navbar.classList.remove('bg-white/20', 'backdrop-blur-md');
  }
});

// Smooth scroll and active link underline
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let index = sections.length;
  while(--index && window.scrollY + 60 < sections[index].offsetTop) {}
  
  navLinks.forEach((link, i) => {
    const underline = link.querySelector('span');
    if(i === index) {
      underline.style.width = '100%';
    } else {
      underline.style.width = '0';
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink(); // initial call

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

