import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const animations = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".home-animation", {
    duration: 1.5,
    opacity: 0,
    x: -50,
    stagger: 0.5,
  });

  gsap.from(".offerings-animation", {
    scrollTrigger: {
      trigger: "#about",
    },
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.4,
  });
};

export default animations;
