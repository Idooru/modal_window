import { buttonEventInit } from "./button-event-init.mjs";
import { loginInputKeyup } from "../keyup/login-input-keyup.mjs";

const pageInit = () => {
  buttonEventInit();
  loginInputKeyup();
};

window.addEventListener("load", pageInit);
