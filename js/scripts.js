
gsap.fromTo(".block", {y:-1000}, {y: 0});
gsap.fromTo(".block", {x:90}, {x: 90});

gsap.fromTo(".balancer", {y:-1000}, {y: 220});
gsap.fromTo(".balancer", {x:300}, {x: 300});

gsap.to( '.balancer' , { 
  delay: 1,
  rotation: 3600,
  stagger: 1,
  duration: 6,
  repeat: -1,

});

gsap.fromTo(".cam1", {y:-1000}, {y: 75});
gsap.fromTo(".cam1", {x:170}, {x: 170});

gsap.to( '.cam1' , { 
  delay: 1,
  rotation: 3600,
  stagger: 1,
  duration: 6,
  repeat: -1,

});

gsap.fromTo(".cam2", {y:-1000}, {y: 75});
gsap.fromTo(".cam2", {x:180}, {x: 465});

gsap.to( '.cam2' , { 
  delay: 1,
  rotation: 3600,
  stagger: 1,
  duration: 6,
  repeat: -1,

});

// gsap.to(".block", { x: 140, y: -100, delay: .1,  });


console.log('OK');