import { loginInputKeyup } from "../keyup/login-input-keyup.mjs";
import { registerInputKeyup } from "../keyup/register-input-keyup.mjs";

export const keyupEventInit = () => {
  const keyupEvents = [loginInputKeyup, registerInputKeyup];

  keyupEvents.forEach((func) => func());
};
