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

// Scenario 1: Initial State Verification
console.log('Scenario 1: Initial State Verification');
console.log(store.getState()); // Expected output: { count: 0 }

// Scenario 2: Incrementing the Counter
console.log('Scenario 2: Incrementing the Counter');
store.dispatch({ type: actionTypes.INCREMENT });
store.dispatch({ type: actionTypes.INCREMENT });
console.log(store.getState()); // Expected output: { count: 2 }

// Scenario 3: Decrementing the Counter
console.log('Scenario 3: Decrementing the Counter');
store.dispatch({ type: actionTypes.DECREMENT });
console.log(store.getState()); // Expected output: { count: 1 }