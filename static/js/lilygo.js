// carousel.js
class Carousel {
  static DEFAULT_CONFIG = {
    interval: 3000,       // 自动播放间隔(ms)
    threshold: 0.5,       // 可视区域检测阈值(0-1)
    animationDuration: 800, // 动画时长(ms)
    swipeThreshold: 50    // 滑动切换距离阈值(px)
  };

  constructor(container, config = {}) {
    this.config = { ...Carousel.DEFAULT_CONFIG, ...config };
    this.container = container;
    this.wrapper = container.querySelector('.carousel-box');
    this.slides = Array.from(this.wrapper.querySelectorAll('.slide-item'));
    this.dots = Array.from(this.wrapper.querySelectorAll('.dot'));
    this.currentIndex = 0;
    this.animationLock = false;
    this.autoPlayTimer = null;
    this.isVisible = false;

    this.initDom();
    this.initEvents();
    this.initIntersectionObserver();
  }

  initDom() {
    // 初始化幻灯片位置
    this.slides.forEach((slide, index) => {
      slide.style.transition = `transform ${this.config.animationDuration}ms ease, opacity ${this.config.animationDuration}ms ease`;
      slide.classList.remove('prev', 'active', 'next');
      
      if (index === 0) {
        slide.classList.add('active');
      } else if (index === 1) {
        slide.classList.add('next');
      }
    });

    // 初始化圆点
    this.dots[0]?.classList.add('active');
  }

  initEvents() {
    // 圆点点击
    this.wrapper.querySelector('.dots-box').addEventListener('click', (e) => {
      const dot = e.target.closest('.dot');
      if (dot) {
        const index = this.dots.indexOf(dot);
        this.switchTo(index);
      }
    });

    // 触摸事件
    this.initTouchEvents();

    // 键盘事件
    this.initKeyboardEvents();
  }

  initTouchEvents() {
    let touchStartX = 0;
    let touchStartTime = 0;

    this.wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartTime = Date.now();
    }, { passive: true });

    this.wrapper.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;
      const deltaTime = Date.now() - touchStartTime;
      
      if (Math.abs(deltaX) > this.config.swipeThreshold || 
         (Math.abs(deltaX) > 30 && deltaTime < 300)) {
        this.handleSwipe(deltaX > 0 ? 'left' : 'right');
      }
    });
  }

  initKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
      if (this.isVisible) {
        switch(e.key) {
          case 'ArrowLeft':
            this.switchTo(this.currentIndex - 1);
            break;
          case 'ArrowRight':
            this.switchTo(this.currentIndex + 1);
            break;
        }
      }
    });
  }

  initIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible) {
          this.startAutoPlay();
        } else {
          this.stopAutoPlay();
        }
      });
    }, { threshold: this.config.threshold });

    this.observer.observe(this.container);
  }

  handleSwipe(direction) {
    if (direction === 'left') {
      this.switchTo(this.currentIndex - 1);
    } else {
      this.switchTo(this.currentIndex + 1);
    }
  }

  switchTo(newIndex) {
    if (this.animationLock) return;
    
    // 处理循环
    if (newIndex < 0) newIndex = this.slides.length - 1;
    if (newIndex >= this.slides.length) newIndex = 0;
    
    this.animationLock = true;
    const direction = newIndex > this.currentIndex ? 'next' : 'prev';
    
    // 设置动画起始状态
    this.setSlidePosition(this.currentIndex, 'leave', direction);
    this.setSlidePosition(newIndex, 'enter', direction);

    setTimeout(() => {
      // 清除旧状态
      this.slides[this.currentIndex].classList.remove('active');
      this.dots[this.currentIndex]?.classList.remove('active');
      
      // 更新当前索引
      this.currentIndex = newIndex;
      
      // 设置新状态
      this.slides[newIndex].classList.add('active');
      this.dots[newIndex]?.classList.add('active');
      
      // 重置相邻幻灯片位置
      this.updateAdjacentSlides();
      this.animationLock = false;
    }, this.config.animationDuration);
  }

  setSlidePosition(index, state, direction) {
    const slide = this.slides[index];
    if (!slide) return;

    const translateX = direction === 'next' ? '100%' : '-100%';
    
    if (state === 'leave') {
      slide.style.transform = `translateX(${direction === 'next' ? '-' : ''}100%)`;
    } else {
      slide.style.transform = 'translateX(0)';
      slide.classList.add('active');
    }
  }

  updateAdjacentSlides() {
    this.slides.forEach((slide, index) => {
      slide.classList.remove('prev', 'next');
      
      if (index === this.currentIndex - 1) {
        slide.classList.add('prev');
      } else if (index === this.currentIndex + 1) {
        slide.classList.add('next');
      }
    });
  }

  startAutoPlay() {
    if (!this.autoPlayTimer) {
      this.autoPlayTimer = setInterval(() => {
        this.switchTo(this.currentIndex + 1);
      }, this.config.interval);
    }
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayTimer);
    this.autoPlayTimer = null;
  }

  destroy() {
    this.stopAutoPlay();
    this.observer.unobserve(this.container);
    this.wrapper.replaceWith(this.wrapper.cloneNode(true));
  }
}

// 自动初始化页面上的所有轮播图
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-container').forEach(container => {
    new Carousel(container, {
      interval: 5000,       // 自动播放间隔
      swipeThreshold: 50,   // 滑动切换阈值
      animationDuration: 800 // 动画时长
    });
  });
});