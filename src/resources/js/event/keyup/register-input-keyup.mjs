import { registerEmailInputEle } from "../../elements/register-email-input-ele.mjs";
import { validateInputLength } from "../../logic/validate-input-length.mjs";
import {
  registerPasswordConfirmInputEle,
  registerPasswordInputEle,
} from "../../elements/register-password-input-ele.mjs";

export const registerInputKeyup = () => {
  registerEmailInputEle.addEventListener(
    "keyup",
    validateInputLength.registerEmail,
  );
  registerPasswordInputEle.addEventListener("keyup", () => {
    validateInputLength.registerPassword();
  });
  registerPasswordConfirmInputEle.addEventListener("keyup", () => {
    validateInputLength.registerPasswordConfirm();
  });
};
