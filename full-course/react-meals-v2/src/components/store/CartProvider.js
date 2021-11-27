import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defaultCart = {
	items: [],
	total: 0,
};

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
	return defaultCart;
}

function CartProvider(props) {
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
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartProvider;
