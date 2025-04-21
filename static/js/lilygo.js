document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel-box');
  const slides = carousel.querySelectorAll('.slide-item');
  const dots = carousel.querySelectorAll('.dot');
  let autoSlideInterval;

  // 初始化第一张
  slides[0].classList.add('active');
  dots[0].classList.add('active');

  // 切换函数
  function switchSlide(index) {
    if (index < 0 || index >= slides.length) return;

    // 移除所有激活状态
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // 设置新状态
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    // 重置自动播放
    resetAutoPlay();
  }

  // 自动播放控制
  function resetAutoPlay() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      const currentIndex = Array.from(slides).findIndex(slide => 
        slide.classList.contains('active')
      );
      const nextIndex = (currentIndex + 1) % slides.length;
      switchSlide(nextIndex);
    }, 5000);
  }

  // 事件委托
  carousel.addEventListener('click', function(e) {
    if (e.target.classList.contains('dot')) {
      const index = parseInt(e.target.dataset.index);
      switchSlide(index);
    }
  });

  // 初始化自动播放
  resetAutoPlay();

  // 悬停控制
  carousel.addEventListener('mouseenter', () => 
    clearInterval(autoSlideInterval));
  carousel.addEventListener('mouseleave', () => 
    resetAutoPlay());
});