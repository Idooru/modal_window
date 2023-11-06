const { axios } = window;

export const callValidateEmailApi = (email) => {
  return axios.get(`http://localhost:8080/user/check-email?email=${email}`);
};
