document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.remove('active', 'left', 'right');
            if (index === currentIndex) {
                img.classList.add('active');
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
                img.classList.add('left');
            } else if (index === (currentIndex + 1) % images.length) {
                img.classList.add('right');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    updateCarousel();
    setInterval(nextImage, 3000);
});
