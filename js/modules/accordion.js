export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );

  if (accordionList.length) {
    const activeClass = "active";
    const firstAccordion = document.querySelectorAll(".open-dt");

    firstAccordion.forEach((item) => item.classList.add(activeClass));
    firstAccordion.forEach((item) =>
      item.nextElementSibling.classList.add(activeClass)
    );

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
