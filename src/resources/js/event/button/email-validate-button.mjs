import { callValidateEmailApi } from "../../backend/call-validate-email-api.mjs";

export const emailValidateButton = () => {
  const emailValidateButtonEle = document.querySelector("#email_validate");

  emailValidateButtonEle.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#register_email").value;

    if (!email) return alert("이메일을 입력해주세요!")

    callValidateEmailApi(email)
      .then((res) => {
        alert("사용가능한 이메일입니다!")
      })
      .catch((err) => {
        alert("중복된 이메일입니다..")
        const registerEmailEle = document.querySelector("#register_email");
        registerEmailEle.value = "";
      })
  });
};

