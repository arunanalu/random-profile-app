import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerProfile from "../reducers";
const { createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer = combineReducers({ reducerProfile })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
