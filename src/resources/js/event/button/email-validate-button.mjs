import { callValidateEmailApi } from "../../backend/call-validate-email-api.mjs";
import { registerEmailInputEle } from "../../elements/register-email-input-ele.mjs";
import { validateEmailInput } from "../../logic/validate-email-input.js";

export const emailValidateButton = () => {
  const emailValidateButtonEle = document.querySelector("#email_validate");

  emailValidateButtonEle.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = registerEmailInputEle.value;
    const result= validateEmailInput(email)

    if (!result) return

    callValidateEmailApi(email)
      .then(() => {
        alert("사용가능한 이메일입니다!")
      })
      .catch(() => {
        alert("중복된 이메일입니다..")
        registerEmailInputEle.value = "";
      })
  });
};

