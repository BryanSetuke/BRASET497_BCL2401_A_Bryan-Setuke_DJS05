// Import necessary modules
import { actionTypes } from "./action.js";
import { reducer } from "./reducer.js";
import { createStore } from "./store.js";

// Create the store using the reducer
const store = createStore(reducer);