let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = 600; // 根据图片宽度设置
const slideTrack = document.querySelector('.slide-track');
const indicatorsContainer = document.querySelector('.indicators');

// 创建指示器
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => {
        currentIndex = i;
        updateSlidePosition();
        updateIndicators();
    });
    indicatorsContainer.appendChild(indicator);
}

function updateSlidePosition() {
    slideTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function updateIndicators() {
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlidePosition();
    updateIndicators();
}

// 自动轮播
let autoSlideInterval = setInterval(() => {
    moveSlide(1);
}, 2500); // 设置轮播间隔为 2秒

// 鼠标悬停时停止自动轮播
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
slider.addEventListener('mouseleave', () => autoSlideInterval = setInterval(() => moveSlide(1), 2000));

// 初始化轮播位置
updateSlidePosition();
