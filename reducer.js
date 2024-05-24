// Import action types and the initial state
import { actionTypes } from "./action.js";
import { initialState } from "./initialState.js";

// Reducer function to handle state changes based on action types
export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // Increment the count
            return { count: state.count + 1 };
        case actionTypes.DECREMENT:
            // Decrement the count
            return { count: state.count - 1 };
        case actionTypes.RESET:
            // Reset the count to initial state
            return { count: 0 };
        default:
            // Return current state if action type is unrecognized
            return state;
    }
}