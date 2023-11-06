import { loginEmailInputEle } from "../elements/login-email-input-ele.mjs";
import { loginPasswordInputEle } from "../elements/login-password-input-ele.mjs";
import { registerEmailInputEle } from "../elements/register-email-input-ele.mjs";
import {
  registerPasswordConfirmInputEle,
  registerPasswordInputEle,
} from "../elements/register-password-input-ele.mjs";

const emailWarn = "이메일 입력 범위를 초과하였습니다.";
const passwordWarn = "비밀번호 입력 범위를 초과하였습니다.";

const maxEmailLength = 28;
const maxPasswordLength = 35;

export const validateInputLength = {
  loginEmail() {
    if (loginEmailInputEle.value.length > maxEmailLength) {
      alert(emailWarn);
      loginEmailInputEle.value = "";
    }
  },
  loginPassword() {
    if (loginPasswordInputEle.value.length > maxPasswordLength) {
      alert(passwordWarn);
      loginPasswordInputEle.value = "";
    }
  },
  registerEmail() {
    if (registerEmailInputEle.value.length > maxEmailLength) {
      alert(emailWarn);
      registerEmailInputEle.value = "";
    }
  },
  registerPassword() {
    if (registerPasswordInputEle.value.length > maxPasswordLength) {
      alert(passwordWarn);
      registerPasswordInputEle.value = "";
    }
  },
  registerPasswordConfirm() {
    if (registerPasswordConfirmInputEle.value.length > maxPasswordLength) {
      alert(passwordWarn);
      registerPasswordConfirmInputEle.value = "";
    }
  },
};
