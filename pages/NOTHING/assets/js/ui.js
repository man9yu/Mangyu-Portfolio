var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  speed: 1000,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: { 
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      // 이전 슬라이드의 텍스트 요소에서 애니메이션 클래스를 제거합니다.
      var previousSlide = this.slides[this.previousIndex];
      var previousTextElement = previousSlide.querySelector('.animated-text');
      var previousSubTextElement = previousSlide.querySelector('.text-sub');
      if (previousTextElement) {
        previousTextElement.classList.remove('show');
      }
      if (previousSubTextElement) {
        previousSubTextElement.classList.remove('show');
      }
      
      // 현재 슬라이드의 텍스트 요소에 애니메이션 클래스를 추가합니다.
      var currentSlide = this.slides[this.activeIndex];
      var currentTextElement = currentSlide.querySelector('.animated-text');
      var currentSubTextElement = currentSlide.querySelector('.text-sub');
      if (currentTextElement) {
        currentTextElement.classList.add('show');
      }
      if (currentSubTextElement) {
        currentSubTextElement.classList.add('show');
      }
    }
  }
});


// FadeInOut
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.fadebox');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fadeInUp');
            entry.target.classList.remove('fadeOutUp');
          }, index * 300);
          observer.unobserve(entry.target);
        } else {
          setTimeout(() => {
            entry.target.classList.remove('fadeInUp');
            entry.target.classList.add('fadeOutUp');
          }, index * 10);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.3,
    });

    if (boxes.length > 0) {
      boxes.forEach((box) => {
        observer.observe(box);
      });
    }
  });

//  타이핑 애니메이션
  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '. . . . .'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 80)
        const end = start + Math.floor(Math.random() * 80)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.01) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  

  const phrases = [
    'N O T H I N G',
  ]
  
  const el = document.querySelector('.main_txt1')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 3000)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()



  //  마우스 따라다니는 스크립트
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  ""
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 10 + "px";
    circle.style.top = y - 10 + "px";

    circle.style.scale = (circles.length + index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 1;
    y += (nextCircle.y - y) * 1;
  });

  requestAnimationFrame(animateCircles);
}
animateCircles();