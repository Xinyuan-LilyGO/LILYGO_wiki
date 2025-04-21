class AdvancedCarousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.items = Array.from(container.querySelectorAll('.carousel-item'));
        this.dots = Array.from(container.querySelectorAll('.carousel-dot'));
        this.prevBtn = container.querySelector('.arrow-left');
        this.nextBtn = container.querySelector('.arrow-right');
        this.currentIndex = 0;
        this.autoPlayTimer = null;
        this.isVisible = false;

        this.init();
    }

    init() {
        // 初始化尺寸
        this.containerWidth = this.container.offsetWidth;
        this.track.style.width = `${this.items.length * 100}%`;

        // 事件绑定
        this.bindEvents();
        this.startAutoPlay();
        this.initIntersectionObserver();
    }

    bindEvents() {
        // 箭头点击
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // 圆点点击
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // 触摸事件
        this.initTouchEvents();
    }

    initTouchEvents() {
        let touchStartX = 0;

        this.container.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        this.container.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;

            if (Math.abs(deltaX) > 50) {
                deltaX > 0 ? this.prevSlide() : this.nextSlide();
            }
        });
    }

    prevSlide() {
        const newIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.goToSlide(newIndex);
    }

    nextSlide() {
        const newIndex = (this.currentIndex + 1) % this.items.length;
        this.goToSlide(newIndex);
    }

    goToSlide(index) {
        if (index === this.currentIndex) return;

        this.currentIndex = index;
        this.updateTrackPosition();
        this.updateDots();
        this.resetAutoPlay();
    }

    updateTrackPosition() {
        const translateX = -this.currentIndex * this.containerWidth;
        this.track.style.transform = `translateX(${translateX}px)`;
        
        this.items.forEach((item, i) => {
            item.classList.toggle('active', i === this.currentIndex);
        });
    }

    updateDots() {
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }

    startAutoPlay() {
        if (!this.autoPlayTimer && this.isVisible) {
            this.autoPlayTimer = setInterval(() => this.nextSlide(), 5000);
        }
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    initIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.isVisible = entry.isIntersecting;
                entry.isIntersecting ? this.startAutoPlay() : this.stopAutoPlay();
            });
        }, { threshold: 0.5 });

        observer.observe(this.container);
    }
}

// 初始化所有轮播图
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-container').forEach(container => {
        new AdvancedCarousel(container);
    });
});