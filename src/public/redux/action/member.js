import axios from "axios";

const requestMembers = (searchName) => {
  const config = {
    params: { searchName },
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

export { requestMembers };
