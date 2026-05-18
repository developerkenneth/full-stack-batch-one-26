let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  // Update index
  currentIndex += direction;

  console.log(currentIndex);
  console.log(direction);

  // Loop back logic
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  // Move the track
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-play
setInterval(() => moveSlide(1), 5000);