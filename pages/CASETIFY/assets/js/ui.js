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


  document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.newFadebox'); // 수정된 부분

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('newFadeInUp'); // 수정된 부분
            entry.target.classList.remove('newFadeOutUp'); // 수정된 부분
          }, index * 300);
          observer.unobserve(entry.target);
        } else {
          setTimeout(() => {
            entry.target.classList.remove('newFadeInUp'); // 수정된 부분
            entry.target.classList.add('newFadeOutUp'); // 수정된 부분
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