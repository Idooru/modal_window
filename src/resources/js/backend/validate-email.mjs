const { axios } = window;

export const validateEmail = async (email) => {
  return await axios.post("http://localhost:8080/makgol/user/mailCheck", {
    email,
  });
};
