import { loginModalEle } from "../elements/login-modal-ele.mjs";
import { modalCoverEle } from "../elements/modal-cover-ele.mjs";

const registerPageButtonEle = document.querySelector(
  ".user_option > span:nth-child(1)",
);
const registerModalEle = document.querySelector(".register_modal");

registerPageButtonEle.addEventListener("click", () => {
  loginModalEle.style.display = "none";
  registerModalEle.style.display = "block";
});

const closeButtonEle = document.querySelector(
  ".register_modal .modal_head > button",
);
closeButtonEle.addEventListener("click", () => {
  modalCoverEle.style.display = "none";
  registerModalEle.style.display = "none";
});
