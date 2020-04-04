import axios from "axios";

const requestMembers = () => {
  const config = {
    params: "",
  };
  return {
    type: "GET_MEMBER",
    payload: axios
      .get(`${process.env.REACT_APP_API_HOST}/member`, config)
      .then(({ data }) => {
        return data.data;
      }),
  };
};

const addMember = (body) => {
  return {
    type: "POST_MEMBER",
    payload: axios
      .post(`${process.env.REACT_APP_API_HOST}/member`, body)
      .then(({ data }) => {
        return data.data;
      }),
  };
};
export { requestMembers, addMember };
