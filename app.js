let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".front-page",
    start: "top",
    end: "100%",
    scrub: "true",
    pin: true,
  },
});

tl.fromTo(
  ".front-page",
  {
    clipPath: "circle(5%)",
  },
  {
    clipPath: "circle(75%)",
    duration: 2,
  }
);

tl.fromTo(
  ".music-note",
  {
    scale: 0.5,
  },
  {
    scale: 0,
    opacity: 0,
    duration: 1,
  },
  "-=2"
);

tl.fromTo(
  ".title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

tl.fromTo(
  ".sub-title",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);
let options = {
        startAngle: -1.55,
        size: 150,
        value: 0.85,
        fill: {gradient: ['#a445b2', '#fa4299']}
      }
      $(".triangle .bar").triangleProgress(options).on('triangle-animation-progress',
      function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
      $(".js .bar").triangleProgress({
        value: 0.70
      });
      $(".react .bar").triangleProgress({
        value: 0.60
      });
    <
