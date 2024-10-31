let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.hero-slides');
    slidesContainer.style.transform = 'translateX(' + (-index * 100) + 'vw)';
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // 当达到最后一张时，返回到第一张
    }
    showSlide(currentSlide);
}

// 自动切换幻灯片
setInterval(nextSlide, 3000); // 每3秒切换一次

// 禁止鼠标滚轮缩放
window.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); // 阻止默认行为
    }
}, { passive: false });