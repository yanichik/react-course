import React from "react";

// setting defaults here ONLY to help with IDE intellisense. NOT required
// and doesn't have any functional value
const CartContext = React.createContext({
	items: [],
	total: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
});

export default CartContext;
