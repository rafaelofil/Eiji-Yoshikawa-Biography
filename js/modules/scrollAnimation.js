export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.8;

    function scrollAnime() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) section.classList.add("active");
        else section.classList.remove("remove");
      });
    }
    scrollAnime();
    window.addEventListener("scroll", scrollAnime);
  }
}
