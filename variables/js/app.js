/* ================================================================
   PORTFOLIO — app.js
   Author: Shivam Verma
   Description: Main JavaScript for portfolio interactivity and effects
   ================================================================ */

/* ----------------------------------------------------------------
   1. AOS INIT (Animate on Scroll)
   ---------------------------------------------------------------- */
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

/* ----------------------------------------------------------------
   2. THEME TOGGLE (Dark / Light)
   ---------------------------------------------------------------- */
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const htmlEl      = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  htmlEl.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark'
    ? 'bi bi-moon-stars-fill'
    : 'bi bi-sun-fill';
}

/* ----------------------------------------------------------------
   3. STICKY NAVBAR — add .scrolled class on scroll
   ---------------------------------------------------------------- */
const mainNav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
  handleBackToTop();
  highlightNavLink();
});

/* ----------------------------------------------------------------
   4. ACTIVE NAV LINK on scroll
   ---------------------------------------------------------------- */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function highlightNavLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/* ----------------------------------------------------------------
   5. TYPED TITLE EFFECT
   ---------------------------------------------------------------- */
const typedEl = document.getElementById('typedTitle');
const titles  = [
  'Python Developer',
  'Backend Engineer',
  'API Architect',
  'Automation Engineer',
];
let titleIndex = 0, charIndex = 0, isDeleting = false;

function typeTitle() {
  const currentTitle = titles[titleIndex];

  if (!isDeleting) {
    typedEl.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(typeTitle, 1800); // Pause before deleting
      return;
    }
  } else {
    typedEl.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(typeTitle, speed);
}

// Start after a short delay (so hero has loaded)
setTimeout(typeTitle, 1400);

/* ----------------------------------------------------------------
   6. SKILL BAR ANIMATION (Intersection Observer)
   ---------------------------------------------------------------- */
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el    = entry.target;
      const width = el.getAttribute('data-width');
      el.style.width = width + '%';
      skillObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

/* ----------------------------------------------------------------
   7. CONTACT FORM — Validation & Simulated Send
   ---------------------------------------------------------------- */
const contactForm  = document.getElementById('contactForm');
const submitBtn    = document.getElementById('submitBtn');
const submitText   = document.getElementById('submitText');
const submitLoad   = document.getElementById('submitLoading');
const formSuccess  = document.getElementById('formSuccess');

const nameInput    = document.getElementById('contactName');
const emailInput   = document.getElementById('contactEmail');
const messageInput = document.getElementById('contactMessage');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validate
  let valid = true;
  [nameInput, emailInput, messageInput].forEach(input => {
    const msg = input.nextElementSibling;
    if (!input.value.trim() || (input.type === 'email' && !isValidEmail(input.value))) {
      input.classList.add('error');
      if (msg && msg.classList.contains('invalid-msg')) msg.classList.add('visible');
      valid = false;
    } else {
      input.classList.remove('error');
      if (msg && msg.classList.contains('invalid-msg')) msg.classList.remove('visible');
    }
  });

  if (!valid) return;

  // Simulate send
  submitText.style.display = 'none';
  submitLoad.style.display = 'inline-flex';
  submitBtn.disabled = true;

  await delay(1800); // Replace with actual fetch() to a form backend

  submitText.style.display = 'inline-flex';
  submitLoad.style.display = 'none';
  submitBtn.disabled = false;
  formSuccess.style.display = 'flex';
  contactForm.reset();

  // Hide success after 5s
  setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
});

// Remove error on input
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('error');
    const msg = input.nextElementSibling;
    if (msg && msg.classList.contains('invalid-msg')) msg.classList.remove('visible');
  });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function delay(ms) { return new Promise(res => setTimeout(res, ms)); }

/* ----------------------------------------------------------------
   8. BACK TO TOP BUTTON
   ---------------------------------------------------------------- */
const backToTopBtn = document.getElementById('backToTop');

function handleBackToTop() {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ----------------------------------------------------------------
   9. FOOTER YEAR
   ---------------------------------------------------------------- */
document.getElementById('footerYear').textContent = new Date().getFullYear();

/* ----------------------------------------------------------------
   10. PROFILE PHOTO FALLBACK
   ---------------------------------------------------------------- */
// If no profile image is uploaded, show an initials placeholder
function handleImgError(imgEl) {
  imgEl.style.display = 'none';
  const parent   = imgEl.parentElement;
  const existing = parent.querySelector('.photo-placeholder');
  if (existing) return;

  const placeholder = document.createElement('div');
  placeholder.className = 'photo-placeholder';
  placeholder.innerHTML = `
    <i class="bi bi-person-fill"></i>
    <span>Add Your Photo</span>
  `;
  parent.insertBefore(placeholder, imgEl);
}

document.querySelectorAll('.hero-photo, .about-photo').forEach(img => {
  img.addEventListener('error', () => handleImgError(img));
  // Check if already broken (cached error)
  if (img.complete && img.naturalWidth === 0) handleImgError(img);
});

/* ----------------------------------------------------------------
   11. SMOOTH NAVBAR CLOSE on mobile link click
   ---------------------------------------------------------------- */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navCollapse = document.getElementById('navContent');
    const bsCollapse  = bootstrap.Collapse.getInstance(navCollapse);
    if (bsCollapse) bsCollapse.hide();
  });
});

/* ----------------------------------------------------------------
   12. HERO PARALLAX (subtle)
   ---------------------------------------------------------------- */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const grid    = document.querySelector('.hero-grid');
  if (grid) {
    grid.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

/* ----------------------------------------------------------------
   13. NAVBAR LINK OFFSET SMOOTH SCROLL (override Bootstrap default)
   ---------------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80; // navbar height
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ----------------------------------------------------------------
   Console Easter Egg 🥚
   ---------------------------------------------------------------- */
console.log('%c👋 Hi there, curious dev!', 'font-size:1.4rem;font-weight:bold;color:#00e5ff;');
console.log('%cWant to collaborate? Check the contact section!', 'font-size:1rem;color:#8a94b2;');