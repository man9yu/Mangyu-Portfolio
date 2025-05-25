gsap.registerPlugin(ScrollTrigger);

// 타이틀 최종이동 값
gsap.fromTo('.section_1', {
}, {
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_img_wrap',
    start: "top 0%",
    end: "+=2200",
    pin: true,
    scrub: 0.3,
  }
});

gsap.fromTo('.section_one_img_0', {
  scale: 1
}, {
  scale: 0.7,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_img_wrap',
    start: "top 0%",
    end: "bottom -50%",
    scrub: 0.3,
  }
});


// 함께 이동
gsap.fromTo('.one_img1', {
  x:0,
  opacity:0,
}, {
  x:'140%',
  opacity:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_img_wrap',
    start: "top 0%",
    end: "bottom -50%",
    scrub: 0.3,
  }
});

gsap.fromTo('.one_img2', {
  x:0,
  opacity:0,
}, {
  x:'-100%',
  opacity:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_img_wrap',
    start: "top 0%",
    end: "bottom -50%",
    scrub: 0.3,
  }
});
gsap.fromTo('.one_img3', {
  x:0,
  opacity:0,
  y:0
}, {
  opacity:1,
  x:'100%',
  y:'50%',
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_img_wrap',
    start: "top 0%",
    end: "bottom -50%",
    scrub: 1,
  }
});
gsap.fromTo('.one_img4', {
  x:0,
  opacity:0,
  y:0
}, {
  opacity:1,
  x:'-130%',
  y:'-50%',
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_img_wrap',
    start: "top 0%",
    end: "bottom -50%",
    scrub: 1,
  }
});
gsap.fromTo('.one_img5', {
  x:0,
  y:0,
  opacity:0
}, {
  opacity:1,
  x:'110%',
  y:'-100%',
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_img_wrap',
    start: "top 0%",
    end: "bottom -50%",
    scrub: 1.6,
  }
});
/////
gsap.fromTo('.section_one_txt_bg', {
  scaleY:0
}, {
  scaleY:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_txt_bg',
    start: "top -50%",
    end: "+=100",
    scrub: 3,
  }
});

gsap.fromTo('.section_one_sub_title', {
  opacity:0,
  scale:.9
}, {
  scale:1,
  opacity:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_sub_title',
    start: "top 0%",
    end: "+=2500",
    pin: true,
    scrub: 0.3,
  }
});
gsap.fromTo('.section_one_sub_title_gsap', {
  scale:1
}, {
  scale:1.5,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_sub_title_gsap',
    start: "top 0%",
    end: "+=2500",
    scrub: 0.3,
  }
});

// 섹션1 서브의 이미지변경 부분
gsap.fromTo('.section_one_sub_fixed', {
}, {
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_one_sub_fixed_box',
    start: "top 5%",
    end: "+=2500",
    pin: true,
    scrub: 0.3,
  }
});

var images = ["./assets/img/rotate_img/1.jpg", "./assets/img/rotate_img/2.jpg", "./assets/img/rotate_img/3.jpg", "./assets/img/rotate_img/4.jpg", "./assets/img/rotate_img/5.jpg", "./assets/img/rotate_img/6.jpg", "./assets/img/rotate_img/7.jpg", "./assets/img/rotate_img/8.jpg", "./assets/img/rotate_img/9.jpg", "./assets/img/rotate_img/10.jpg", "./assets/img/rotate_img/11.jpg", "./assets/img/rotate_img/12.jpg", "./assets/img/rotate_img/13.jpg", "./assets/img/rotate_img/14.jpg", "./assets/img/rotate_img/15.jpg", "./assets/img/rotate_img/16.jpg", "./assets/img/rotate_img/17.jpg", "./assets/img/rotate_img/18.jpg"];

gsap.fromTo(".section_one_sub_fixed", {
}, {
  duration: .5, 
  scrollTrigger: {
    trigger: ".section_one_sub_fixed",
    start: "top 0%",
    end: "bottom 100%", 
    scrub: 1, 
    pin:false,
    onUpdate: function(self) {
      var progress = self.progress;
      var index = Math.floor(progress * (images.length - 1));
      var imageSrc = images[index];

      // 이미지를 교체합니다.
      document.getElementById('imageToChange').src = imageSrc;
    }
  }
});

// 섹션3 이어 함꼐이동
gsap.fromTo('.section_3', {
}, {
  scrollTrigger: {
    trigger: '.section_three_img_wrap',
    start: "top 0%",
    end: "bottom -100%",
    pin: true,
    scrub: 0.3,
  }
});

gsap.fromTo('.section_three_img_1', {
  left:'50%',
  opacity:'',
  scale:.9,
}, {
  left:'20%',
  scale:1.1,
  opacity:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_three_img_1',
    start: "top 0%",
    end: "bottom -100%",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_three_img_2', {
  left:'50%',
  opacity:'',
  scale:.9,
}, {
  scale:1.1,
  left:'35%',
  opacity:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_three_img_2',
    start: "top 0%",
    end: "bottom -100%",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_three_img_3', {
  left:'50%',
  opacity:'',
  scale:.9,
}, {
  scale:1.1,
  left:'50%',
  opacity:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_three_img_3',
    start: "top 0%",
    end: "bottom -100%",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_three_img_4', {
  left:'50%',
  opacity:'',
  scale:.9,
}, {
  scale:1.1,
  left:'65%',
  opacity:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_three_img_4',
    start: "top 0%",
    end: "bottom -100%",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_three_img_5', {
  left:'50%',
  opacity:'',
  scale:.9,
}, {
  scale:1.1,
  left:'80%',
  opacity:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_three_img_5',
    start: "top 0%",
    end: "bottom -100%",
    pin: false,
    scrub: 2,
  }
});

gsap.fromTo('.section_three_img_bg', {
  opacity:'',
  scaleY:0,
}, {
  scaleY:1,
  opacity:1,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: '.section_three_img_bg',
    start: "top -150%",
    end: "bottom -90%",
    pin: false,
    scrub: 3,
  }
});

// 섹션4 함꼐 이동
gsap.fromTo('.section_4', {
}, {
  scrollTrigger: {
    trigger: '.section_four_txt_wrap',
    start: "top 0%",
    end: "bottom -100%",
    pin: true,
    scrub: 0.3,
  }
});

gsap.fromTo('.section_four_txt_wrap', {
}, {
  x:"-100%",
  scrollTrigger: {
    trigger: '.section_four_txt_wrap',
    start: "top 0%",
    end: "bottom -100%",
    pin: false,
    scrub: 0.3,
  }
});
gsap.fromTo('.section_four_txt_dot', {
  scale:1
}, {
  scale:60,
  scrollTrigger: {
    trigger: '.section_four_txt_dot',
    start: "bottom 0%",
    end: "+=500",
    pin: false,
    scrub: 2,
  }
});

gsap.fromTo('.section_4_sub', {
}, {
  scrollTrigger: {
    trigger: '.section_4_sub',
    start: "top 0%",
    end: "bottom 50%",
    pin: true,
    scrub: 0.3,
  }
});














































































// ////////////////////////////////////////////////////////


class Scrooth {
  constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
      Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);
      
      requestAnimationFrame(this.scroll);
    }
  }
}

const scroll = new Scrooth({
  element: window,
  strength: 32, //스크롤 한번에 이동하는 거리
  acceleration: 1.75,
  deceleration: .845,
});

