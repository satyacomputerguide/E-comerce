let currentSlide = 0;
let slideInterval; // Store the interval reference for auto-slide

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    // Reset the auto-slide interval on manual change
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000); // Restart the interval

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Start auto-slide when the page loads
slideInterval = setInterval(nextSlide, 5000);

// Initial slide
showSlide(currentSlide);
