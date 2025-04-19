// 轮播图控制
document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function() {
      const index = parseInt(this.dataset.index);
      switchSlide(index);
    });
  });
  
  let autoSlideInterval;
  
  function switchSlide(index) {
    // 清除自动播放
    clearInterval(autoSlideInterval);
    
    // 获取元素
    const slides = document.querySelectorAll('.slide-item');
    const dots = document.querySelectorAll('.dot');
  
    // 移除激活状态
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
  
    // 设置新状态
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  
    // 重启自动播放
    startAutoSlide();
  }
  
  // 自动播放功能
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      const activeIndex = [...document.querySelectorAll('.slide-item')].findIndex(slide => 
        slide.classList.contains('active')
      );
      const nextIndex = (activeIndex + 1) % document.querySelectorAll('.slide-item').length;
      switchSlide(nextIndex);
    }, 5000);
  }
  
  // 初始化自动播放
  startAutoSlide();
  
  // 暂停自动播放当鼠标悬停
  document.querySelector('.carousel-box').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  
  document.querySelector('.carousel-box').addEventListener('mouseleave', () => {
    startAutoSlide();
  });