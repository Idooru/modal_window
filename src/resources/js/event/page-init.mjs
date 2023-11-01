import { modalButton } from "./modal-button.mjs";
import { validateInputLength } from "./validate-input-length.mjs";

const pageInit = () => {
  const buttonEle = document.querySelector(".modal_button button");
  buttonEle.addEventListener("click", modalButton);

  validateInputLength();
};

window.addEventListener("load", pageInit);
