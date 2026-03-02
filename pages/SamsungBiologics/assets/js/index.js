gsap.registerPlugin(ScrollTrigger);



const swiper = new Swiper('.main_text_slider', {
    loop: true,
    
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    allowTouchMove: false, 
    effect: 'fade',
    fadeEffect: { crossFade: true },
});

const swiper_slide = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 1200,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
});

// D-DAY 
const eventDate = new Date('2025-06-22');
const today = new Date();

const diffTime = eventDate - today;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

const ddayBadge = document.getElementById('dday-badge');

if (diffDays > 0) {
  ddayBadge.textContent = `D-${diffDays}`;
} else if (diffDays === 0) {
  ddayBadge.textContent = 'D-DAY';
} else {
  ddayBadge.textContent = ''; 
}

// 메뉴
$(document).ready(function() {
  $('.menu-item').mouseenter(function() {
    $(this).find('a').addClass('active');
  });

  $('.menu-item').mouseleave(function() {
    $(this).find('a').removeClass('active');
  });
});

// 모바일 헤더
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.mobile__hamburger');
  const menu = document.querySelector('.mobile__menu');

  hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});

// 페이드 인 아웃
document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.boxfd');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('fadeInUp');
          entry.target.classList.remove('fadeOutUp');
        }, index * 280); // 딜레이 시간 (100ms 기준, 필요에 따라 조정 가능)
        observer.unobserve(entry.target);
      } else {
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

  if (boxes.length > 0) {
    boxes.forEach((box) => {
      observer.observe(box);
    });
  }
});

