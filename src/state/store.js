// Import necessary functions from Redux
import { createStore, applyMiddleware } from "redux"; 

// Import the root reducer that combines all reducers
import reducers from "./action-creators/reducers"; 

// Import Redux Thunk middleware for handling asynchronous actions
import { thunk } from "redux-thunk"; 

// Create the Redux store with reducers, initial state (empty object {}), and apply middleware
export const store = createStore(reducers, {}, applyMiddleware(thunk));
