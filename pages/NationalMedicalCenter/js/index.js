// jQaury

///////////////// JavaScript ////////////////////

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// SWiper
var swiper = new Swiper(".mySwiper", {
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : true,   // 슬라이드 반복 여부
  loopAdditionalSlides : 1,
  speed : 2000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

  },
});

var swiper = new Swiper(".mySwiper2", {
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : true,   // 슬라이드 반복 여부
  loopAdditionalSlides : 1,
  speed : 2000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

  },
});

// FadeInOut
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInUp');
      entry.target.classList.remove('fadeOutUp');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fadeInUp');
      entry.target.classList.add('fadeOutUp');
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.3,
});

const boxes = document.querySelectorAll('.boxfd');
boxes.forEach((box) => {
  observer.observe(box);
});
