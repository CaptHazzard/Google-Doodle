
gsap.fromTo(".block", {y:-3000, delay: 1.25}, {y: 85, delay: 1.25});
gsap.fromTo(".block", {x:125, delay: 1.25}, {x: 125, delay: 1.25});

gsap.fromTo(".head1", {y:-3000, delay: 1.5}, {y: 0, delay: 1.5});
gsap.fromTo(".head1", {x:90, delay: 1.5}, {x: 90, delay: 1.5});

gsap.fromTo(".head2", {y:-3000, delay: 1.5}, {y: 0, delay: 1.5});
gsap.fromTo(".head2", {x:440, delay: 1.5}, {x: 440, delay: 1.5});

gsap.fromTo(".intake", {y:-3000, delay: 1.75}, {y: 5, delay: 1.75});
gsap.fromTo(".intake", {x:252, delay: 1.75}, {x: 252, delay: 1.75});

gsap.fromTo(".belts", {y:-3000, delay: 2}, {y: 78, delay: 2});
gsap.fromTo(".belts", {x:193, delay: 2}, {x: 193, delay: 2});

gsap.fromTo(".pulleys", {y:-3000, delay: 2.25}, {y: 87, delay: 2.25});
gsap.fromTo(".pulleys", {x:305, delay: 2.25}, {x: 307, delay: 2.25});

gsap.fromTo(".balancer", {y:3000, delay: 2.5}, {y: 220, delay: 2.5});
gsap.fromTo(".balancer", {x:300, delay: 2.5}, {x: 300, delay: 2.5});

gsap.to( '.balancer' , { 
  delay: 3.7,
  rotation: 360,
  ease:Linear.easeNone,
  duration: .5,
  repeat: -1,

});

gsap.fromTo(".g", {y:75, delay: 2.75}, {y: 75, delay: 2.75});
gsap.fromTo(".g", {x:-5000, delay: 2.75}, {x: 5, delay: 2.75});

gsap.fromTo(".cam1", {y:-3000, delay: 2.75}, {y: 75, delay: 2.75});
gsap.fromTo(".cam1", {x:170, delay: 2.75}, {x: 170, delay: 2.75});

gsap.to( '.cam1' , { 
  delay: 3.7,
  rotation: 360,
  ease:Linear.easeNone,
  duration: .5,
  repeat: -1,

});

gsap.fromTo(".l", {y:75, delay: 2.25}, {y: 75, delay: 2.25});
gsap.fromTo(".l", {x:5000, delay: 2.25}, {x: 630, delay: 2.25});

gsap.fromTo(".e", {y:75, delay: 3}, {y: 75, delay: 3});
gsap.fromTo(".e", {x:5000, delay: 3}, {x: 755, delay: 3});

gsap.fromTo(".cam2", {y:-3000, delay: 3}, {y: 75, delay: 3});
gsap.fromTo(".cam2", {x:465, delay: 3}, {x: 465, delay: 3});

gsap.to( '.cam2' , { 
  delay: 3.7,
  rotation: 360,
  ease:Linear.easeNone,
  duration: .5,
  repeat: -1,

});


gsap.fromTo(".exhaust", {opacity: 0}, {opacity: 1, duration: .75, delay: 3.7, repeat: -1});
gsap.to (".exhaust", {x:10, delay: 3});
gsap.to (".exhaust", {y: 280, delay: 3});
gsap.to (".exhaust", {rotate: 180});
// gsap.to(".block", { x: 140, y: -100, delay: .1,  });


console.log('OK');