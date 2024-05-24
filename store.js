// Function to create a Redux-inspired store
export function createStore(reducer) {
    // Initialize the state using the reducer with an undefined action
    let state = reducer(undefined, {});
    // Array to hold listener functions
    const listeners = [];

    return {
        // Dispatch an action to update the state
        dispatch(action) {
            // Update the state using the reducer
            state = reducer(state, action);
            // Notify all subscribed listeners of the state change
            listeners.forEach((listener) => listener());
        },
        // Get the current state
        getState() {
            return state;
        },
        // Subscribe a listener to state changes
        subscribe(listener) {
            listeners.push(listener);
            // Return a function to unsubscribe the listener
            return () => {
                const index = listeners.indexOf(listener);
                listeners.splice(index, 1);
            };
        },
    };
}
