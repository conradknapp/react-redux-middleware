import * as actionTypes from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return [...state, ...action.payload];
    case actionTypes.DELETE_USER:
      return [...state.filter(({ id }) => id !== action.payload)];
    default:
      return state;
  }
};
