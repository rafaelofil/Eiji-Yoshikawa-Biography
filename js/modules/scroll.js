export default function initScroll() {
  const main = document.getElementById("main");
  const intro = document.getElementById("intro");
  const buttonScroll = document.getElementById("scroll-smooth");

  function directionScroll() {
    const mainTop = main.getBoundingClientRect().top;
    const mainBottom = main.getBoundingClientRect().bottom;
    if (mainTop < 0 && mainBottom > 0) {
      scrollToIntro();
    }
  }

  function scrollToIntro() {
    window.removeEventListener("scroll", directionScroll);

    const introTop = intro.offsetTop;
    window.scrollTo({
      top: introTop,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", directionScroll);
  buttonScroll.addEventListener("click", scrollToIntro);
}
