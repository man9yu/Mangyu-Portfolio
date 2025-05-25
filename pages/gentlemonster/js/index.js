$(document).ready(function() {
    $('.s0').hover(
      function() {
        // 요소에 호버 시 네비게이션 바를 위로 애니메이션 효과와 함께 사라지게 함
        $('.navbar').slideUp(100);
      },
      function() {
        // 호버 해제 시 네비게이션 바를 다시 아래로 애니메이션 효과와 함께 나타나게 함
        $('.navbar').slideDown(900);
      }
    );
  });

  $(document).ready(function() {
    $('.s2').hover(
      function() {
        // 요소에 호버 시 네비게이션 바를 위로 애니메이션 효과와 함께 사라지게 함
        $('.navbar').slideUp(100);
      },
      function() {
        // 호버 해제 시 네비게이션 바를 다시 아래로 애니메이션 효과와 함께 나타나게 함
        $('.navbar').slideDown(900);
      }
    );
  });

  $(document).ready(function() {
    $(".s5btn").hover(function() {
      $(".s5title").css({
        "transform": "scale(1.03) translate(-50%, -50%)",
        "transition": "transform 0.6s ease"
      });
    }, function() {
      $(".s5title").css({
        "transform": "scale(1) translate(-50%, -50%)",
        "transition": "transform 0.6s ease"
      });
    });
  });

$(document).ready(function(){
    $("#fullpage").fullpage({
        autoScrolling:true,
        scrollHorizontally:true,

    });
});
//



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

