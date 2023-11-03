import { validateEmail } from "../../backend/validate-email.mjs";

export const emailValidateButton = () => {
  const emailValidateButtonEle = document.querySelector("#email_validate");

  emailValidateButtonEle.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#register_email").value;

    validateEmail(email)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  });
};
