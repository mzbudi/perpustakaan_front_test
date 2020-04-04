const initialState = {
  dataMember: [],
};

const member = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MEMBER_PENDING":
      return {
        ...state,
      };
    case "UPDATE_MEMBER_REJECTED":
      return {
        ...state,
      };
    case "UPDATE_MEMBER_FULFILLED":
      return {
        ...state,
        dataMember: action.payload,
      };
    case "GET_MEMBER_PENDING":
      return {
        ...state,
      };
    case "GET_MEMBER_REJECTED":
      return {
        ...state,
      };
    case "GET_MEMBER_FULFILLED":
      return {
        ...state,
        dataMember: action.payload,
      };
    case "POST_MEMBER_PENDING":
      return {
        ...state,
      };
    case "POST_MEMBER_REJECTED":
      return {
        ...state,
      };
    case "POST_MEMBER_FULFILLED":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default member;
