export default function initScroll() {
  const buttonScroll = document.getElementById("scroll-smooth");

  const intro = document.getElementById("intro");
  const main = document.getElementById("main");

  function scrollSection() {
    const mainTop = main.getBoundingClientRect().top;
    const mainBottom = main.getBoundingClientRect().bottom;
    console.log(mainTop, mainBottom);
    if (mainTop < 0 && mainBottom >= 0) {
      window.scrollTo({
        top: intro.offsetTop,
        behavior: "smooth",
      });
    }
  }

  window.addEventListener("scroll", scrollSection);

  function scrollToIntro(event) {
    const intro = document.querySelector("#intro");
    intro.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  buttonScroll.addEventListener("click", scrollToIntro);
}
