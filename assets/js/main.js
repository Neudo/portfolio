// changement de couleur contact au scroll
const contact = document.querySelector(".right a");

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop > clientHeight - 30) {
    contact.classList.add("black");
    contact.classList.remove("white");
  } else if (clientHeight + scrollTop <= scrollHeight - clientHeight + 20) {
    contact.classList.add("white");
    contact.classList.remove("black");
  }
});

// horizontal scroll

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".container--works .horizontal");
let allSections = gsap.utils.toArray(".main-wrapper section");

gsap.to(sections, {
  xPercent: -100 * sections.length,
  ease: "none",
  scrollTrigger: {
    trigger: ".container--horizontal",
    pin: true,
    start: "top",
    markers: true,
    scrub: 1,
    end: () =>
      "+=" + document.querySelector(".container--works").offsetWidth / 4,
  },
});

gsap.to(".projects", {
  scrollTrigger: {
    trigger: ".pro",
    start: "top-=300",
    end: "bottom+=200",
    scrub: true,
    markers: false,
  },
  x: 100,
  opacity: 1,
});
