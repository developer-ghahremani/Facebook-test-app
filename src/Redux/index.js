import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { user } from "./reducer/user";
import { progress } from "./reducer/progress";
import { getUser } from "./action/user";

export const store = createStore(
  combineReducers({ user, progress }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (localStorage.getItem("credential")) store.dispatch(getUser());
