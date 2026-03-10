// Hero slideshow
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 1) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.add('opacity-0');
    current = (current + 1) % slides.length;
    slides[current].classList.remove('opacity-0');
  }, 3000);
}

// Scroll-triggered animations
const animatedEls = document.querySelectorAll('[data-animate]');
if (animatedEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  animatedEls.forEach(el => observer.observe(el));
}

// Scroll-aware nav background
const nav = document.getElementById('main-nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load in case page is already scrolled
}
