const initialState = {
  data: [],
  message: "",
  isLoading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "POST_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "POST_LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
      };
    case "POST_LOGIN_FULFILLED":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        data: [],
      };
    default:
      return state;
  }
};

export default auth;
