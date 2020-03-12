import axios from "axios";

export const requestLogin = body => {
  return {
    type: "POST_LOGIN",
    payload: axios
      .post(`${process.env.REACT_APP_API_HOST}/auth/login`, body)
      .then(({ data }) => {
        return data.data[0];
      })
  };
};

export const requestLogout = () => {
  return {
    type: "LOGOUT"
  };
};
