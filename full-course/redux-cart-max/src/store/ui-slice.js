import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: { cartIsVisible: false, showNotification: {} },
	reducers: {
		toggle(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		notify(state, action) {
			state.showNotification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
