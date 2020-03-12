const initialState = {
  data: [],
  message: "",
  isLoading: false
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_BOOKS_REJECTED":
      return {
        ...state,
        isLoading: false
      };
    case "GET_BOOKS_FULFILLED":
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case "ADD_BOOKS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "ADD_BOOKS_REJECTED":
      return {
        ...state,
        isLoading: false
      };
    case "ADD_BOOKS_FULFILLED":
      return {
        ...state,
        isLoading: false
      };
    case "UPDATE_BOOKS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "UPDATE_BOOKS_REJECTED":
      return {
        ...state,
        isLoading: false
      };
    case "UPDATE_BOOKS_FULFILLED":
      return {
        ...state,
        isLoading: false
      };
    case "DELETE_BOOKS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "DELETE_BOOKS_REJECTED":
      return {
        ...state,
        isLoading: false
      };
    case "DELETE_BOOKS_FULFILLED":
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default books;
