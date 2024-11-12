/**
 * "ADD", "SUBTRACT", "RESET"
 * @typedef Action
 * @property {string} type
 */

/**
 * Manage a counter's state.
 * @param {Function} reducer
 * @param {number} initialState
 * @returns {Object}
 */
export function createStore(reducer, initialState = 0) {
  let state = initialState;
  let listeners = [];

  return {
    /**
     * Returns the current state.
     * @returns {number}
     */
    getState() {
      return state;
    },

    /**
     * Dispatches an action to update the state.
     * @param {Action} action
     */
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener(state));
    },

    /**
     * Adds a listener to be called on state changes.
     * @param {Function} listener
     * @returns {Function}
     */
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  };
}
