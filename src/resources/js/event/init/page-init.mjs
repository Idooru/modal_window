import { buttonEventInit } from "./button-event-init.mjs";
import { keyupEventInit } from "./keyup-event-init.mjs";

const pageInit = () => {
  buttonEventInit();
  keyupEventInit();
};

window.addEventListener("load", pageInit);
