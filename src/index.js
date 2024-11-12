import { createStore } from './model/store';
import { tallyReducer } from './model/reducer';
import { addAction, subtractAction, resetAction } from './model/action';

const store = createStore(tallyReducer);

store.subscribe(state => console.log("Updated State:", state));

// SCENARIO 1: Initial State Verification
console.log("Initial State:", store.getState());

// SCENARIO 2: Incrementing the Counter
store.dispatch(addAction());
store.dispatch(addAction());

// SCENARIO 3: Decrementing the Counter
store.dispatch(subtractAction());

// SCENARIO 4: Resetting the Counter
store.dispatch(resetAction());