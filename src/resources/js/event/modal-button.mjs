export const modalButton = () => {
  const modalCoverEle = document.querySelector(".modal_cover");
  const modalCoverStyle = modalCoverEle.style;

  modalCoverStyle.display = "block";

  const closeButtonEle = document.querySelector(".modal_head > button");
  closeButtonEle.addEventListener("click", () => {
    modalCoverStyle.display = "none";
  });
};
