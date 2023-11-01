export const validateInputLength = () => {
  const emailInputEle = document.querySelector(
    "#login_form label:nth-child(1) input",
  );

  const passwordInputEle = document.querySelector(
    "#login_form label:nth-child(2) input",
  );

  function validate() {
    let inputValue = this.value;

    if (inputValue.length > 30) {
      alert("입력 범위를 초과하였습니다.");
      this.value = "";
    }
  }

  emailInputEle.addEventListener("keyup", validate);
  passwordInputEle.addEventListener("keyup", validate);
};
