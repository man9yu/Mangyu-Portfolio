// jQaury
$(document).ready(function() {
  $('.c2btn1').hover(
    function() {
      $('.c2con1').fadeIn(500);
    },
    function() {
      $('.c2con1').fadeOut(200);
    }
  );

  $('.c2btn2').hover(
    function() {
      $('.c2con2').fadeIn(500);
    },
    function() {
      $('.c2con2').fadeOut(200);
    }
  );

  $('.c2btn3').hover(
    function() {
      $('.c2con3').fadeIn(500);
    },
    function() {
      $('.c2con3').fadeOut(200);
    }
  );

  $('.c2btn4').hover(
    function() {
      $('.c2con4').fadeIn(500);
    },
    function() {
      $('.c2con4').fadeOut(200);
    }
  );
});
///////////////// JavaScript ////////////////////

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// SWiper
var swiper = new Swiper(".mySwiper", {
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2200, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : true,   // 슬라이드 반복 여부
  loopAdditionalSlides : 1,
  speed : 1500,
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
document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.boxfd');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // 딜레이를 주기 위해 setTimeout 사용
        setTimeout(() => {
          entry.target.classList.add('fadeInUp');
          entry.target.classList.remove('fadeOutUp');
        }, index * 280); // 딜레이 시간 (100ms 기준, 필요에 따라 조정 가능)
        observer.unobserve(entry.target);
      } else {
        // 딜레이를 주기 위해 setTimeout 사용
        setTimeout(() => {
          entry.target.classList.remove('fadeInUp');
          entry.target.classList.add('fadeOutUp');
        }, index * 10); // 딜레이 시간 (100ms 기준, 필요에 따라 조정 가능)
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.3,
  });

  // Intersection Observer를 적용하기 전에 요소들을 찾았는지 확인합니다.
  if (boxes.length > 0) {
    boxes.forEach((box) => {
      observer.observe(box);
    });
  }
});

