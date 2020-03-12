import { combineReducers } from "redux";
import auth from "./auth";
import books from "./books";
// import auth from './auth';

export default combineReducers({
  auth,
  books
});
