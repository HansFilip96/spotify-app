import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer.js";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer, //skapa authReducer
});

const configureStore = () => {
  const middleWare = applyMiddleware(thunk);
  const store = createStore(rootReducers, composeEnhancer(middleWare));
  //more logic here
  return store;
};

export default configureStore;
