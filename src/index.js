import React from "react";
import { render } from "react-dom";
// bring in createStore from 'redux' && Provider from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import promise from "./middleware/promise";

import rootReducer from "./reducers/index";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
