const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let currentSlide = 0;

carouselPrev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselItems.length - 1;
  }
  updateCarousel();
});

carouselNext.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= carouselItems.length) {
    currentSlide = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentSlide) {
      item.classList.add('active');
    }
  });
}

updateCarousel(); // Initialize the carousel
