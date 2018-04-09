import * as actionTypes from "./types";
import axios from "axios";

export const onFetchUsers = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/users");

  return {
    type: actionTypes.FETCH_USERS,
    payload: response
  };
};

export const onDeleteUser = id => {
  return {
    type: actionTypes.DELETE_USER,
    payload: id
  };
};
