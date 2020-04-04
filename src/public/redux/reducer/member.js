const initialState = {
  dataMember: [],
};

const member = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default member;
