import { buttonEventInit } from "./button-event-init.mjs";
import { validateInputLength } from "../etc/validate-input-length.mjs";

const pageInit = () => {
  buttonEventInit();
  validateInputLength();
};

window.addEventListener("load", pageInit);
