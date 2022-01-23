import { createSlice, configureStore } from "@reduxjs/toolkit";
// import { createSlice, configureStore, current } from "@reduxjs/toolkit";

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
			const newItem = { ...action.payload };
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (!existingItem) {
				state.totalItems++;
				newItem.quantity++;
				newItem.totalPrice += newItem.price;
				state.items.push(newItem);
			} else {
				const indexOfExistingItem = state.items.findIndex(
					(element) => element.id === existingItem.id
				);
				state.items[indexOfExistingItem].quantity++;
				state.items[indexOfExistingItem].totalPrice +=
					state.items[indexOfExistingItem].price;
			}
		},
		removeItem(state, action) {
			state.totalItems--;
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		addOneToItem(state, action) {
			const foundItem = state.items.find((item) => item.id === action.payload);
			foundItem.quantity++;
			foundItem.totalPrice += foundItem.price;
		},
		subtractOneFromItem(state, action) {
			const foundItem = state.items.find((item) => item.id === action.payload);
			foundItem.quantity--;
			foundItem.totalPrice -= foundItem.price;
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
