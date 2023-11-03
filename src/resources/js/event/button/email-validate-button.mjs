export const emailValidateButton = () => {
  const emailValidateButtonEle = document.querySelector("#email_validate");

  emailValidateButtonEle.addEventListener("click", (e) => {
    e.preventDefault();
    alert("hi");
  });
};
