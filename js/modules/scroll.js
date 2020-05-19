export default function initScroll() {
  const buttonScroll = document.querySelectorAll("#scroll-smooth");

  function scrollToIntro(event) {
    event.preventDefault(0);
    const intro = document.querySelector("#intro");
    intro.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  buttonScroll.forEach((link) => {
    link.addEventListener("click", scrollToIntro);
  });
}
