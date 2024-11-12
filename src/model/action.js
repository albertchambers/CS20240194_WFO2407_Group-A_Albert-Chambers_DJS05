// src/store/store.js

/**
 * @typedef Action
 * @property {string} type - Type of action, e.g., "ADD", "SUBTRACT", "RESET".
 */

/**
 * Creates a Redux-inspired store to manage a counter's state.
 * @param {Function} reducer - A function that determines state updates based on actions.
 * @param {number} initialState - Initial value of the state.
 * @returns {Object} Store - An object with methods to manage and observe state.
 */
export function createStore(reducer, initialState = 0) {
  let state = initialState;
  let listeners = [];

  return {
    /**
     * Returns the current state.
     * @returns {number} Current state value.
     */
    getState() {
      return state;
    },

    /**
     * Dispatches an action to update the state.
     * @param {Action} action - The action to handle.
     */
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener(state));
    },

    /**
     * Adds a listener to be called on state changes.
     * @param {Function} listener - Function called on state change.
     * @returns {Function} Unsubscribe - Function to remove this listener.
     */
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  };
}
