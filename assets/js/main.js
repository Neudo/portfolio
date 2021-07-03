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
console.log(sections);
let allSections = gsap.utils.toArray(".main-wrapper section");
console.log(allSections);

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container--horizontal",
    pin: true,
    start: "top",
    markers: false,
    scrub: 1,
    end: () =>
      "+=" + document.querySelector(".container--works").offsetWidth / 4,
  },
});
