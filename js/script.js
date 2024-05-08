const sideBtn = document.querySelector(".side-btn");
const modal = document.querySelector(".modal-container");
const modalActions = document.querySelector(".modal-actions");

sideBtn.addEventListener("click", () => {
    modal.classList.toggle("open-modal");
    modalActions.classList.toggle("show-modal-actions");
});
