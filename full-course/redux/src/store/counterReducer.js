import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, toggle: true };
const counterSlice = createSlice({
	name: "counter",
	// "initialState" MUST BE used. In fact: name, initialState, reducers MUST BE used
	initialState: initialCounterState,
	// in regular reducer, it would be WRONG to directly manipulate state, but here we
	// can manipulate "directly" instead of overwriting the entire state, b/c when using
	// slices, the backend actually overwrites instead of directly manipulating
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			// when using configureStore, MUST use action.payload for payload. CANNOT name anything else
			state.counter = state.counter + action.payload;
		},
		toggle(state) {
			state.toggle = !state.toggle;
		},
	},
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
