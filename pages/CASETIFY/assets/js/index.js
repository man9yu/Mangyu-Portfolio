gsap.registerPlugin(ScrollTrigger);



gsap.fromTo('#main_img', {
  scale:0.5,
  x:'',
}, {
  scale:1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_1',
    start: "top 0",
    end: "+=2500",
    pin: true,
    scrub: 1,
  }
});

// 메인 텍스트 이동

// 
gsap.fromTo('.one_txt_1', {
  x:'0%'
}, {
  x:'-40%',
  ease: "none",
  scrollTrigger: {
    trigger: '.one_txt_1',
    start: "top 0",
    end: "+=2300",
    pin: false,
    scrub: 0.3,
  }
});
gsap.fromTo('.one_txt_top_2', {
  x:'0%',
}, {
  x:'-60%',
  ease: "none",
  scrollTrigger: {
    trigger: '.one_txt_2',
    start: "top 0",
    end: "+=2300",
    pin: false,
    scrub: 0.3,
  }
});
gsap.fromTo('.flower_gsap', {
  scale:.1,
  rotate:0
}, {
  scale:1,
  rotate:120,
  ease: "ease-in-out",
  scrollTrigger: {
    trigger: '.one_txt_2',
    start: "top 0",
    end: "+=1600",
    pin: false,
    scrub: 1,
  }
});
gsap.fromTo('.tree_gsap', {
  rotate:0,
  scale:.9,
  x:0,
  opacity:0
}, {
  scale:1,
  rotate:10,
  x:-50,
  opacity:1,
  ease: "ease-in-out",
  scrollTrigger: {
    trigger: '.one_txt_2',
    start: "top 100",
    end: "+=800",
    pin: false,
    scrub: 1,
  }
});
gsap.fromTo('.mountain_gsap', {
  scale:.75,
  y:'30%',
  opacity:0
}, {
  opacity:0.8,
  y:'0%',
  scale:.9,
  ease: "ease-in-out",
  scrollTrigger: {
    trigger: '.one_txt_2',
    start: "top -800",
    end: "+=1600",
    pin: false,
    scrub: 1,
  }
});
gsap.fromTo('.one_txt_2', {
  x:'0%',
}, {
  x:'-20%',
  ease: "none",
  scrollTrigger: {
    trigger: '.one_txt_2',
    start: "top 0",
    end: "+=2300",
    pin: false,
    scrub: 0.3,
  }
});
gsap.fromTo('.one_txt_3', {
  x:'0%',
}, {
  x:'-10%',
  ease: "none",
  scrollTrigger: {
    trigger: '.one_txt_3',
    start: "top 0",
    end: "+=2300",
    pin: false,
    scrub: 0.3,
  }
});
gsap.fromTo('.one_txt_4', {
  x:'0%',
}, {
  x:'10%',
  ease: "none",
  scrollTrigger: {
    trigger: '.one_txt_4',
    start: "top 0",
    end: "+=1800",
    pin: false,
    scrub: 0.3,
  }
});
gsap.fromTo('.one_txt_5', {
  x:'0%',
}, {
  x:'130%',
  ease: "none",
  scrollTrigger: {
    trigger: '.one_txt_5',
    start: "top 0",
    end: "+=2300",
    pin: false,
    scrub: 0.3,
  }
});
gsap.fromTo('.one_txt_6', {
  x:'0%',
}, {
  x:'30%',
  ease: "none",
  scrollTrigger: {
    trigger: '.one_txt_6',
    start: "top 0",
    end: "+=2300",
    pin: false,
    scrub: 0.3,
  }
});

// 섹션 2 부분 ( 비디오 )
gsap.fromTo('.section_two_video_wrap', {
}, {
  ease: "none",
  scrollTrigger: {
    trigger: '.section_2',
    start: "top 0",
    end: "+=2500",
    pin: true,
    scrub: 1,
  }
});
//

gsap.fromTo('.section_two_line1', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line1',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line2', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line2',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line3', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line3',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line4', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line4',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line5', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line5',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line6', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line6',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line7', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line7',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line8', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line8',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line9', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line9',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line9', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line9',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
gsap.fromTo('.section_two_line10', {
  scaleY:0
}, {
  scaleY:1.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.section_two_line10',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 2,
  }
});
// /
gsap.fromTo('.section_two_line_txt1', {
  y:'100%'
}, {
  y:'',
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_two_line_txt1 ',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 5,
  }
});
gsap.fromTo('.section_two_line_txt2', {
  y:'100%'
}, {
  y:'',
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_two_line_txt2 ',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 5,
  }
});

gsap.fromTo('.section_two_line_txt3', {
  y:'100%'
}, {
  y:'',
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_two_line_txt3 ',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 5,
  }
});

gsap.fromTo('.section_two_line_txt4', {
  y:'100%'
}, {
  y:'',
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_two_line_txt4 ',
    start: "top -70%",
    end: "+=200",
    pin: false,
    scrub: 5,
  }
});

// 섹션 3

gsap.fromTo('.section_three_txt1', {
  y:'200%',
  rotate:"10"
}, {
  y:'',
  rotate:"0",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_three_txt1 ',
    start: "top 85%",
    end: "+=10",
    pin: false,
    scrub: 3,
  }
});
gsap.fromTo('.section_three_txt2', {
  y:'200%',
  rotate:"10"
}, {
  y:'',
  rotate:"0",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_three_txt2',
    start: "top 80%",
    end: "+=10",
    pin: false,
    scrub: 3,
  }
});

gsap.fromTo('.section_three_txt3', {
  y:'200%',
  rotate:"10"
}, {
  y:'',
  rotate:"0",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_three_txt3',
    start: "top 81%",
    end: "+=10",
    pin: false,
    scrub: 3,
  }
});
gsap.fromTo('.section_three_txt4', {
  y:'200%',
  rotate:"10"
}, {
  y:'',
  rotate:"0",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_three_txt4',
    start: "top 78%",
    end: "+=10",
    pin: false,
    scrub: 3,
  }
});

gsap.fromTo('.section_three_txt5', {
  y:'200%',
  rotate:"10"
}, {
  y:'',
  rotate:"0",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_three_txt5',
    start: "top 75%",
    end: "+=10",
    pin: false,
    scrub: 3,
  }
});
gsap.fromTo('.section_three_txt6', {
  y:'200%',
  rotate:"10"
}, {
  y:'',
  rotate:"0",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: '.section_three_txt6',
    start: "top 73%",
    end: "+=10",
    pin: false,
    scrub: 3,
  }
});

// ////////////////////////////////////////////////////////
const header = document.getElementById('sticky-header');
const trigger = document.getElementById('trigger-point');

window.addEventListener('scroll', () => {
  const triggerTop = trigger.getBoundingClientRect().top;

  if (triggerTop <= 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

const imagePaths = ['./assets/img/main_img0.jpg', './assets/img/main_img1.jpg', './assets/img/main_img2.jpg', './assets/img/main_img3.jpg', './assets/img/main_img4.jpg', './assets/img/main_img5.jpg', './assets/img/main_img6.jpg', './assets/img/main_img7.jpg', './assets/img/main_img8.jpg', './assets/img/main_img9.jpg'];

const imageInterval = 1800 / imagePaths.length;
  let currentScroll = 0;

  function handleScroll() {
    const scrollTop = window.scrollY;
    let index = Math.floor(scrollTop / imageInterval);
    if (index >= imagePaths.length) {
      index = imagePaths.length - 1;
    }
    const imagePath = imagePaths[index];
    document.getElementById('main_img').src = imagePath;
    currentScroll = scrollTop;
  }

  window.addEventListener('scroll', handleScroll);




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
  strength: 29, 
  acceleration: 1.75,
  deceleration: .915,
});



// 커서
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

// for intro motion
let mouseMoved = false;

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}
const params = {
    pointsNumber: 30,
    widthFactor: .15,
    mouseThreshold: .002,
    spring: .4,
    friction: .5
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
    }
}

window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
  pointer.x = eX;
  pointer.y = eY - window.pageYOffset;
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);


function update(t) {

    // for intro motion
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
    });

    ctx.lineCap = "round";
	 ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 1; i < trail.length - 1; i++) {
        const xc = .5 * (trail[i].x + trail[i + 1].x);
        const yc = .5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }
    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();
    
    window.requestAnimationFrame(update);
}

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// 

const videoContainer = document.querySelector('.video-container');
const stories = document.querySelectorAll('.stories a');

function moveCircle(e) {
  const rect = videoContainer.getBoundingClientRect();
  const offsetX = e.pageX - rect.left - window.pageXOffset;
  const offsetY = e.pageY - rect.top - window.pageYOffset;
  
  // 비디오 컨테이너의 위치를 마우스 위치와 일치시킴
  gsap.to(videoContainer, 0.3, {
    css: {
      left: offsetX - (videoContainer.clientWidth / 2),
      top: offsetY - (videoContainer.clientHeight / 2)
    }
  });
  
  // 현재 보이는 비디오가 있을 경우 해당 비디오의 위치를 조정
  const visibleVideo = document.querySelector('.visible video');
  if (visibleVideo) {
    gsap.to(visibleVideo, 0.3, {
      css: {
        left: offsetX - (visibleVideo.clientWidth / 2),
        top: offsetY - (visibleVideo.clientHeight / 2)
      }
    });
  }
}

var flag = false;

//for each stories on mouseover, update which video is visible
$(stories).each(function(i, value){
  
  $(this).mouseover(function(e){
    flag=true; 
    const video_id = value.dataset.id;
    console.log(video_id);
    const video_target = $('video[data-id='+video_id+']');
    console.log(video_target);
    video_target.addClass('visible');
    
    
    gsap.to(videoContainer,0.4,{scale:1,autoAlpha:1})
    $(this).on('mousemove', moveCircle);
  });
  $(this).mouseout(function(){
    flag=false;
    const video_id = value.dataset.id;
    const video_target = $('video[data-id='+video_id+']');
    video_target.removeClass('visible');
    
    gsap.to(videoContainer,0.4,{scale:0.1,autoAlpha:0})
  });
});