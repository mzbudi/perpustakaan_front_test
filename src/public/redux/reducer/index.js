import { combineReducers } from "redux";
import auth from "./auth";
import books from "./books";
import member from "./member";
// import auth from './auth';

export default combineReducers({
  auth,
  books,
  member,
});
