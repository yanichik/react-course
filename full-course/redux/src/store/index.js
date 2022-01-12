// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggle: true };
const counterSlice = createSlice({
	name: "counter",
	// "initialState" MUST BE used. In fact: name, initialState, reducers MUST BE used
	initialState,
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

// const counterReducer = (state = defaultState, action) => {
// 	if (action.type === "increment") {
// 		return { counter: state.counter + 1, toggle: state.toggle };
// 	}
// 	if (action.type === "increase") {
// 		return { counter: state.counter + action.payload, toggle: state.toggle };
// 	}
// 	if (action.type === "decrement") {
// 		return { counter: state.counter - 1, toggle: state.toggle };
// 	}
// 	if (action.type === "toggle") {
// 		return { counter: state.counter, toggle: !state.toggle };
// 	}
// 	return defaultState;
// };

// const store = createStore(counterReducer);

// .reducer is kind of like the grand/primary reducer that can contain other reducers
// therefore IT IS ".reducer" even though the counterSlice component is "reducers".
// ".reducer" consists of if statements that trigger the reducers w/in.
// NOTE: using createStore becomes issue if have big app with multiple reducers. In that case,
// can scratch {createStore} import from redux, and replace with {configureStore} import from redux toolkit
// const store = createStore(counterSlice.reducer);

const store = configureStore({
// 	// option 1 is to make the one reducer that is defined here as the primary reducer
	reducer: counterSlice.reducer,
// 	// option 2 is to create an object where you can name multiple reducers
// 	// reducer: {
// 	// 	counter: counterSlice.reducer,
// 	// },
});
export const counterActions = counterSlice.actions;
export default store;
