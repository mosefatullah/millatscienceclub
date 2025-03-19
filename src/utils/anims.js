import { gsap } from "gsap";

export const topToBottom = () => {
  document.querySelectorAll(".__topToBottom").forEach((element) => {
    const siblings = element.parentElement.querySelectorAll(".__topToBottom");
    const totalSiblings = siblings.length;

    const index = Array.from(siblings).indexOf(element);

    gsap.fromTo(
      element,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        delay: (index + 0.2) / totalSiblings,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};
