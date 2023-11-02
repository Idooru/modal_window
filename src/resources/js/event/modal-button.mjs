import { loginModalEle } from "../elements/login-modal-ele.mjs";
import { modalCoverEle } from "../elements/modal-cover-ele.mjs";

export const modalButton = () => {
  const modalCoverStyle = modalCoverEle.style;

  modalCoverStyle.display = "block";

  loginModalEle.style.display = "block";

  const closeButtonEle = document.querySelector(
    ".login_modal .modal_head > button",
  );
  closeButtonEle.addEventListener("click", () => {
    modalCoverStyle.display = "none";
  });
};
