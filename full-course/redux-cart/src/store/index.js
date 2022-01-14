import { createSlice, configureStore, current } from "@reduxjs/toolkit";

const initialCartState = {
	items: [],
	totalItems: 0,
	show: true,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		addNewItem(state, action) {
			// debugger
			let { payload } = action;
			let newItem = payload;
			console.log(newItem);
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (!existingItem) {
				state.totalItems++;
				state.items.push(newItem);
				console.log("newItem qty - pre: " + newItem.quantity);
				newItem.quantity++;
				console.log("newItem qty - post: " + newItem.quantity);
				console.log("state - post qty add to newItem: " + current(state));
				newItem.totalPrice += newItem.price;
			} else {
				const indexOfExistingItem = state.items.findIndex(
					(element) => element.id === existingItem.id
				);
				state.items[indexOfExistingItem].quantity++;
				state.items[indexOfExistingItem].totalPrice +=
					state.items[indexOfExistingItem].price;
				// existingItem.quantity++;
				// existingItem.totalPrice += existingItem.price;
			}
		},
		removeItem(state, action) {
			console.log("removeItem payload: " + action.payload);
			console.log("item 0 id: " + state.items[0].id);
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		addOneToItem(state, action) {
			const foundItem = state.items.find((item) => item.id === action.payload);
			foundItem.quantity++;
			foundItem.totalPrice += foundItem.price;
		},
		subtractOneFromItem(state, action) {
			const foundItem = state.items.find((item) => item.id === action.payload);
			console.log(foundItem);
			foundItem.quantity--;
			console.log(foundItem);
			foundItem.totalPrice -= foundItem.price;
			console.log("post remove inside reducer: " + foundItem.quantity);
		},
		toggleShow(state) {
			state.show = !state.show;
		},
	},
});

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});

export default store;
export const cartActions = cartSlice.actions;
