export default function initModal() {
  const buttonOpen = document.querySelector("[data-modal='open']");
  const buttonClose = document.querySelector("[data-modal='close']");
  const containerModal = document.querySelector("[data-modal='container']");

  const englishOption = document.querySelectorAll("[data-modal='english']");
  const portugueseOption = document.querySelectorAll(
    "[data-modal='portuguese']"
  );
  const english = document.querySelectorAll(".english");
  const portuguese = document.querySelectorAll(".portuguese");

  function openModal() {
    containerModal.classList.add("active");
  }

  function closeModal(event) {
    containerModal.classList.remove("active");
  }

  function clickOutModal(event) {
    if (event.target === this) closeModal();
  }

  function englishActive(event) {
    event.preventDefault();
    english.forEach((item) => {
      item.classList.add("active");
    });
    portuguese.forEach((item) => {
      item.classList.remove("active");
    });
    closeModal();
  }

  function portugueseActive(event) {
    event.preventDefault();
    portuguese.forEach((item) => {
      item.classList.add("active");
    });
    english.forEach((item) => {
      item.classList.remove("active");
    });
    closeModal();
  }

  buttonOpen.addEventListener("click", openModal);
  buttonClose.addEventListener("click", closeModal);
  containerModal.addEventListener("click", clickOutModal);

  englishOption.forEach((item) => {
    item.addEventListener("click", englishActive);
  });
  portugueseOption.forEach((item) => {
    item.addEventListener("click", portugueseActive);
  });
}
