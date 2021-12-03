import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defaultCart = {
	items: [],
	total: 0,
};
// Reducer defines the logic of actions to perform per each action type
// Reducer stays outside of the component function
function cartReducer(state, action) {
	if (action.type === "ADD") {
		// check if existing
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		// if existing, update item
		if (existingItemIndex >= 0) {
			const existingItem = state.items[existingItemIndex];
			const updatedItem = {
				...existingItem,
				amount: action.item.amount + existingItem.amount,
			};
			let updatedItems = { ...state };
			updatedItems.items[existingItemIndex] = updatedItem;
			updatedItems.total = state.total + action.item.price * action.item.amount;
			return updatedItems;
		} else {
			return {
				items: state.items.concat(action.item),
				total: state.total + action.item.price * action.item.amount,
			};
		}
	}
	if (action.type === "REMOVE") {
		// find item per id
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = state.items[existingItemIndex];
		let updatedItems = { ...state };
		if (updatedItems.items[existingItemIndex].amount === 1) {
			updatedItems.total = updatedItems.total - existingItem.price;
			updatedItems.items = updatedItems.items.filter((item) => item.id !== action.id);
			return updatedItems;
		} else {
			updatedItems.total = updatedItems.total - existingItem.price;
			updatedItems.items[existingItemIndex].amount--;
			return updatedItems;
		}
	}
	return defaultCart;
}
// Provider component that will wrap around sections of code where
// the context is/may be required. Any wrapped code or children of wrapped
// code can access this context. BUT NOT brothers of wrapped code
function CartProvider(props) {
	// cartState -> current state
	// dispatch -> function that takes in type of action to dispatch and some payload,
	// in tis case the payloads are an item for 'ADD' and id for 'REMOVE'
	// 'type' must be called 'type' and 'payload' may be called anything
	const [cartState, dispatch] = useReducer(cartReducer, defaultCart);
	function addItemHandler(item) {
		return dispatch({ type: "ADD", item: item });
	}
	function removeItemHandler(id) {
		return dispatch({ type: "REMOVE", id: id });
	}
	// context data managed here in provider and NOT in the context file.
	// the context file "initialization" is ONLY for IDE intellisense purposes
	const cartContext = {
		items: cartState.items,
		total: cartState.total,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};
	return (
		// returning the provider with the children wrapped - enables to wrap
		// context around any other code
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartProvider;
