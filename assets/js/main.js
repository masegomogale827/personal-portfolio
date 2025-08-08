// Example: Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
    // Close nav on mobile after click
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');
    if (navLinks && navToggle && window.innerWidth <= 800) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', function() {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Typed.js animated tagline
if (document.getElementById('typed')) {
  new Typed('#typed', {
    strings: [
      'Turning Data into Insights.',
      'Building Intelligent Solutions.',
      'AI/ML Enthusiast & Innovator.',
      'Let\'s create the future together!'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 500,
    loop: true
  });
}

// Contact form validation and animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Remove previous errors
    contactForm.querySelectorAll('.form-error').forEach(el => el.remove());
    let valid = true;
    const name = contactForm.querySelector('#name');
    const email = contactForm.querySelector('#email');
    const message = contactForm.querySelector('#message');
    // Name validation
    if (!name.value.trim()) {
      showError(name, 'Name is required');
      valid = false;
    }
    // Email validation
    if (!email.value.trim()) {
      showError(email, 'Email is required');
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      showError(email, 'Enter a valid email');
      valid = false;
    }
    // Message validation
    if (!message.value.trim()) {
      showError(message, 'Message is required');
      valid = false;
    }
    if (valid) {
      // Animate success
      contactForm.classList.add('form-success');
      setTimeout(() => {
        contactForm.classList.remove('form-success');
        contactForm.reset();
      }, 1500);
      // Show success message
      showFormMessage('Message sent! Thank you.', 'success');
    } else {
      // Animate error
      contactForm.classList.add('form-error-anim');
      setTimeout(() => contactForm.classList.remove('form-error-anim'), 600);
    }
  });
}
function showError(input, message) {
  const error = document.createElement('div');
  error.className = 'form-error';
  error.textContent = message;
  input.parentElement.appendChild(error);
}
function showFormMessage(msg, type) {
  let msgDiv = document.querySelector('.form-message');
  if (!msgDiv) {
    msgDiv = document.createElement('div');
    msgDiv.className = 'form-message';
    contactForm.parentElement.insertBefore(msgDiv, contactForm);
  }
  msgDiv.textContent = msg;
  msgDiv.className = 'form-message ' + type;
  setTimeout(() => {
    msgDiv.textContent = '';
    msgDiv.className = 'form-message';
  }, 2500);
}
// Back to Top button logic
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
// Footer last updated date
const lastUpdated = document.getElementById('lastUpdated');
if (lastUpdated) {
  const d = new Date(document.lastModified);
  lastUpdated.textContent = d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
} 

const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = [
    "a Junior Network Administrator",
    "a Junior IT Support Specialist",
    "an AI & Tech Enthusiast",
    "a Support Technician"
  ];
  const typingDelay = 100;
  const erasingDelay = 70;
  const newTextDelay = 1500; // delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 300);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });



  

  
