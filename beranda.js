// beranda.js
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Slideshow
  const track = document.querySelector('.slide-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  if (track && slides.length > 0 && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    }, 5000);
  }
});
