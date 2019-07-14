import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";
import rootReducer from "../Reducers/RootReducer";
import initialState from './InitialState.js';

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
}

export default createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);