export default function initModal() {
  const buttonOpen = document.querySelector("[data-modal='open']");
  const buttonClose = document.querySelector("[data-modal='close']");
  const containerModal = document.querySelector("[data-modal='container']");

  // const englishOption = document.querySelector("[data-modal='english']");
  // const portugueseOption = document.querySelector("[data-modal='portuguese']");
  // const english = document.querySelectorAll(".english");
  // const portuguese = document.querySelectorAll(".portuguese");

  function openModal() {
    containerModal.classList.add("active");
  }

  function closeModal(event) {
    containerModal.classList.remove("active");
  }

  function clickOutModal(event) {
    if (event.target === this) closeModal();
  }

  // function englishActive(event) {
  //   event.preventDefault();
  //   english.forEach(classList.add("active"));
  //   portuguese.forEach(portuguese.classList.remove("active"));
  //   closeModal();
  // }

  // function portugueseActive(event) {
  //   portuguese.forEach(classList.add("active"));
  //   english.forEach(classList.remove("active"));
  //   closeModal();
  // }

  buttonOpen.addEventListener("click", openModal);
  buttonClose.addEventListener("click", closeModal);
  containerModal.addEventListener("click", clickOutModal);

  // englishOption.addEventListener("click", englishActive);
  // portugueseOption.addEventListener("click", portugueseActive);
}
