import axios from "axios";

export const requestBooks = () => {
  return {
    type: "GET_BOOKS",
    payload: axios
      .get(`${process.env.REACT_APP_API_HOST}/books`)
      .then(({ data }) => {
        return data.data;
      })
  };
};

export const addBook = body => {
  return {
    type: "ADD_BOOKS",
    payload: axios.post(`${process.env.REACT_APP_API_HOST}/books`, body)
  };
};

export const updateBook = (body, book_id) => {
  return {
    type: "UPDATE_BOOKS",
    payload: axios.put(
      `${process.env.REACT_APP_API_HOST}/books/${book_id}`,
      body
    )
  };
};

export const deleteBooks = id => {
  return {
    type: "DELETE_BOOKS",
    payload: axios.delete(`${process.env.REACT_APP_API_HOST}/books/${id}`)
  };
};
