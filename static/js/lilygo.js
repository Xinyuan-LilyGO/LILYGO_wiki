const slides = document.getElementById('slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;
let index = 0;

function showSlide(i) {
  slides.style.transform = `translateX(-${i * 600}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
  index = i;
}

function nextSlide() {
  let nextIndex = (index + 1) % totalSlides;
  showSlide(nextIndex);
}

let interval = setInterval(nextSlide, 3000);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(interval); // 停止自动轮播
    showSlide(Number(dot.dataset.index));
    interval = setInterval(nextSlide, 3000); // 重启自动轮播
  });
});
