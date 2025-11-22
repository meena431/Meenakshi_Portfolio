//  Navbar Responsive

const hamburger = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav_menu.classList.toggle('active');
})

// Theme Toggle

const toggle = document.getElementById('themeToggler');
const root = document.documentElement;

function setLightMode(isLight, save = true) {
  if (isLight) {
    root.classList.add('light');
    toggle.classList.add('light-toggler');
    toggle.setAttribute('aria-pressed', 'true');
    toggle.querySelector('.toggle-icon').innerHTML = '<i class="bi bi-moon"></i>'
  } else {
    root.classList.remove('light');
    toggle.setAttribute('aria-pressed', 'false');
    toggle.querySelector('.toggle-icon').innerHTML = '<i class="bi bi-moon-fill"></i>'
  }
  if (save) {
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }
}

(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    setLightMode(true, false)
  } else if (saved === 'dark') {
    setLightMode(false, false)
  } else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setLightMode(prefersLight, false);
  }
})();

toggle.addEventListener('click', () => {
  const isLight = root.classList.contains('light');
  setLightMode(!isLight, true);
});

const mq = window.matchMedia('(prefers-color-scheme: light)');
mq.addEventListener('change', (e) => {
  const saved = localStorage.getItem('theme');
  if (!saved) {
    setLightMode(e.matches, false);
  }
});

// Soft Skill Slider

  const swiper = new Swiper('.mySlider', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  spaceBetween: 15,   // tighter spacing

  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },   // <-- NOW 4 CARDS
    1200: { slidesPerView: 4 }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});

// Contact Section

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
revealElements();

const button = document.querySelector(".send-btn");
button.addEventListener("click", function (e) {
  this.classList.remove("ripple");
  void this.offsetWidth; // restart animation
  this.classList.add("ripple");
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent Successfully!");
});


// Scroll Button

  const btn = document.getElementById("scrollBtn");
  const icon = btn.querySelector("i");

  btn.classList.remove("visible");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      btn.classList.add("visible");   
      icon.classList.add("bi-arrow-up-short");
      icon.classList.remove("bi-arrow-down-short");
    } else {
      btn.classList.remove("visible"); 
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
