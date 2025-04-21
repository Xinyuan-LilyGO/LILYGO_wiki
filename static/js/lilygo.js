class SmartCarousel {
  constructor(container) {
      this.container = container;
      this.carouselBox = container.querySelector('.carousel-box');
      this.slides = Array.from(this.carouselBox.querySelectorAll('.slide-item'));
      this.dots = Array.from(this.carouselBox.querySelectorAll('.dot'));
      this.currentIndex = 0;
      this.autoPlayInterval = null;
      this.isVisible = false;
      this.touchStartX = 0;
      this.initTouchEvents();

      this.init();
  }

  init() {
      // 事件绑定
      this.carouselBox.querySelector('.dots-box').addEventListener('click', (e) => {
          if (e.target.classList.contains('dot')) {
              const index = this.dots.indexOf(e.target);
              this.switchTo(index);
          }
      });

      // 初始化状态
      this.switchTo(0);
  }
  initTouchEvents() {
    this.carouselBox.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX;
    });

    this.carouselBox.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchEndX - this.touchStartX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                this.switchTo(this.currentIndex - 1);
            } else {
                this.switchTo(this.currentIndex + 1);
            }
        }
    });
}


  switchTo(index) {
      // 边界检查
      if (index < 0 || index >= this.slides.length) return;

      // 移除旧状态
      this.slides.forEach(slide => slide.classList.remove('active'));
      this.dots.forEach(dot => dot.classList.remove('active'));

      // 设置新状态
      this.currentIndex = index;
      this.slides[index].classList.add('active');
      this.dots[index].classList.add('active');

      // 重置自动播放
      this.resetAutoPlay();
  }

  startAutoPlay() {
      if (!this.isVisible) return;
      this.autoPlayInterval = setInterval(() => {
          const nextIndex = (this.currentIndex + 1) % this.slides.length;
          this.switchTo(nextIndex);
      }, 3000);
  }

  stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
  }

  resetAutoPlay() {
      this.stopAutoPlay();
      this.startAutoPlay();
  }
}

// 初始化所有轮播图
const carouselInstances = [];
document.querySelectorAll('.carousel-container').forEach(container => {
  carouselInstances.push(new SmartCarousel(container));
});

// 可视区域检测
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      const instance = carouselInstances.find(
          c => c.container === entry.target
      );
      
      if (instance) {
          instance.isVisible = entry.isIntersecting;
          if (entry.isIntersecting) {
              instance.startAutoPlay();
          } else {
              instance.stopAutoPlay();
          }
      }
  });
}, {
  threshold: 0.3,
  rootMargin: '0px'
});

// 开始观察所有轮播容器
carouselInstances.forEach(instance => {
  observer.observe(instance.container);
});

// 窗口resize处理
window.addEventListener('resize', () => {
  carouselInstances.forEach(instance => {
      instance.resetAutoPlay();
  });
});