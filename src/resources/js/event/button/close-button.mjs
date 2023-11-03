import { modalCoverEle } from "../../elements/modal-cover-ele.mjs";
import { registerModalEle } from "../../elements/register-modal-ele.mjs";

export const closeButton = ({ modal }) => {
  if (modal === "login") {
    document
      .querySelector(".login_modal .modal_head .close_button")
      .addEventListener("click", () => {
        modalCoverEle.style.display = "none";
      });
  } else {
    document
      .querySelector(".register_modal .modal_head .close_button")
      .addEventListener("click", () => {
        modalCoverEle.style.display = "none";
        registerModalEle.style.display = "none";
      });
  }
};
