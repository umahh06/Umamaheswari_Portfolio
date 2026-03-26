// ========================================
// THEME TOGGLE LOGIC
// ========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

// Function to set theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';
        themeToggle.title = 'Switch to Light Mode';
    } else {
        themeIcon.textContent = '🌙';
        themeToggle.title = 'Switch to Dark Mode';
    }
}

// Check for saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initialTheme = savedTheme || systemTheme;

// Apply initial theme
setTheme(initialTheme);

// Toggle theme on click
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========================================
// MOBILE NAV TOGGLE
// ========================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function revealElements() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// ========================================
// SKILLS TAB SWITCHER
// ========================================
const skillTabs = document.querySelectorAll('.skill-tab');

function animateXpBars(panel) {
  panel.querySelectorAll('.xp-fill').forEach(fill => {
    const width = fill.getAttribute('data-width');
    // Reset then animate
    fill.style.width = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fill.style.width = width;
      });
    });
  });
}

skillTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    skillTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show corresponding panel
    const tabId = tab.getAttribute('data-tab');
    document.querySelectorAll('.skills-panel').forEach(panel => {
      panel.classList.remove('active');
    });
    const activePanel = document.getElementById('tab-' + tabId);
    if (activePanel) {
      activePanel.classList.add('active');
      animateXpBars(activePanel);
    }
  });
});

// Animate XP bars when section scrolls into view
function animateVisibleXpBars() {
  document.querySelectorAll('.skills-panel.active .xp-fill').forEach(fill => {
    const top = fill.getBoundingClientRect().top;
    if (top < window.innerHeight - 80 && fill.style.width === '0px' || fill.style.width === '') {
      fill.style.width = fill.getAttribute('data-width');
    }
  });
}

window.addEventListener('scroll', animateVisibleXpBars);
// Initial trigger after short delay to allow CSS transition
window.addEventListener('load', () => {
  setTimeout(() => {
    const firstPanel = document.querySelector('.skills-panel.active');
    if (firstPanel) animateXpBars(firstPanel);
  }, 500);
});


// ========================================
// TYPING EFFECT FOR HERO ROLE
// ========================================
const roles = ['AI Developer', 'Java Programmer', 'Problem Solver', 'Tech Enthusiast'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const heroRole = document.querySelector('.hero-role .typed-text');

function typeRole() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    heroRole.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    heroRole.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 400;
  }

  setTimeout(typeRole, typingSpeed);
}

// Start typing after load
window.addEventListener('load', () => {
  setTimeout(typeRole, 1000);
});

// ========================================
// COUNTER ANIMATION FOR STATS
// ========================================
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const windowHeight = window.innerHeight;
    const counterTop = counter.getBoundingClientRect().top;

    if (counterTop < windowHeight - 80 && !counter.classList.contains('counted')) {
      counter.classList.add('counted');
      let current = 0;
      const increment = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = current + suffix;
      }, 40);
    }
  });
}

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);
