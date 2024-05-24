// Import necessary modules
import { actionTypes } from "./action.js";
import { reducer } from "./reducer.js";
import { createStore } from "./store.js";

// Create the store using the reducer
const store = createStore(reducer);

// Subscribe to state changes and log them to the console
store.subscribe(() => {
    console.log('State updated:', store.getState());
});