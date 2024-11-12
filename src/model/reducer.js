/**
 * Handles state updates for the counter.
 * @param {number} state
 * @param {Action} action
 * @returns {number}
 */
export function tallyReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
