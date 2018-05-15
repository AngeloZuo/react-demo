import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import CombineReducers from "./reducers/CombineReducers";

//Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
const store = createStore(
    // reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
    CombineReducers,
    // [preloadedState] (any): The initial state.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // [enhancer] (Function): The store enhancer.
    applyMiddleware(ReduxThunk)
);

//return (Store): An object that holds the complete state of your app.
export default store;