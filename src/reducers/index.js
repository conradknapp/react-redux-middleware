import { combineReducers } from "redux";
import users_reducer from "./users_reducer";

const rootReducer = combineReducers({
  users: users_reducer
});

export default rootReducer;
