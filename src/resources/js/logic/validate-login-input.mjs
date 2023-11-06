export const validateLoginEmailInput = () => {
    const loginEmailInputEle = document.querySelector("#login_email");

    if (loginEmailInputEle.value.length > 28) {
      alert("이메일 입력 범위를 초과하였습니다.");
      loginEmailInputEle.value = "";
    }
}

export const validateLoginPasswordInput = () => {
  const loginPasswordInputEle = document.querySelector("#login_password");

  if (loginPasswordInputEle.value.length > 35) {
    alert("비밀번호 입력 범위를 초과하였습니다.");
    loginPasswordInputEle.value = "";
  }
}