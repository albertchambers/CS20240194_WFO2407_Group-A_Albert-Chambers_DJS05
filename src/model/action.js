/**
 * Action creator for incrementing the counter.
 * @returns {Object}
 */
export const addAction = () => ({ type: "ADD" });

/**
 * Action creator for decrementing the counter.
 * @returns {Object}
 */
export const subtractAction = () => ({ type: "SUBTRACT" });

/**
 * Action creator for resetting the counter.
 * @returns {Object}
 */
export const resetAction = () => ({ type: "RESET" });
