export default function initScroll() {
  const main = document.getElementById("main");
  const intro = document.getElementById("intro");
  const buttonScroll = document.getElementById("scroll-smooth");
  let scrollToDown = false;

  function AddScrollEvent() {
    window.addEventListener("scroll", directionScroll);
  }
  function RemoveScrollEvent() {
    window.removeEventListener("scroll", directionScroll);
  }
  buttonScroll.addEventListener("click", scrollToIntro);

  function directionScroll() {
    const mainTop = main.getBoundingClientRect().top;
    const mainBottom = main.getBoundingClientRect().bottom;

    if (mainBottom < 0) {
      scrollToDown = true;
    }

    if (mainTop < 0 && !scrollToDown) {
      scrollToIntro();
    } else if (mainBottom > 0 && scrollToDown) {
      scrollUp();
    }
  }

  function scrollToIntro() {
    RemoveScrollEvent();

    const introTop = intro.offsetTop;
    window.scrollTo({
      top: introTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      scrollToDown = true;
      AddScrollEvent();
    }, 850);
  }

  function scrollUp() {
    RemoveScrollEvent();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      scrollToDown = false;
      AddScrollEvent();
    }, 850);
  }

  AddScrollEvent();
}
