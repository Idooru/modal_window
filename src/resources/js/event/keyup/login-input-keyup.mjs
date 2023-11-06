import { validateLoginEmailInput, validateLoginPasswordInput } from "../../logic/validate-login-input.mjs";

export const loginInputKeyup = () => {
  const emailInputEle = document.querySelector(
    "#login_form label:nth-child(1) input",
  );

  const passwordInputEle = document.querySelector(
    "#login_form label:nth-child(2) input",
  );

  emailInputEle.addEventListener("keyup", validateLoginEmailInput);
  passwordInputEle.addEventListener("keyup", validateLoginPasswordInput);
};
