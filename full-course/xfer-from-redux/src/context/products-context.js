import React, { useState } from "react";

export const ProductsContext = React.createContext({
	// initialize products as an empty array - defining initial
	// state inside the useState below, while here we're simply
	// defining that the context will be an object with a products key
	// and an array value
	products: [],
	// adding id as a parameter so IDE will know that toggleFav
	// needs to take an "id" parameter
	toggleFav: (id) => {},
});

export default (props) => {
	// managing state here - inside the wrapper function
	const [productList, setProductList] = useState([
		{
			id: "p1",
			title: "Red Scarf",
			description: "A pretty red scarf.",
			isFavorite: false,
		},
		{
			id: "p2",
			title: "Blue T-Shirt",
			description: "A pretty blue t-shirt.",
			isFavorite: false,
		},
		{
			id: "p3",
			title: "Green Trousers",
			description: "A pair of lightly green trousers.",
			isFavorite: false,
		},
		{
			id: "p4",
			title: "Orange Hat",
			description: "Street style! An orange hat.",
			isFavorite: false,
		},
	]);

	const toggleFavorite = (productId) => {
		setProductList((currentProductList) => {
			const prodIndex = currentProductList.findIndex((p) => p.id === productId);
			const newFavStatus = !currentProductList[prodIndex].isFavorite;
			const updatedProducts = [...currentProductList];
			updatedProducts[prodIndex] = {
				...currentProductList[prodIndex],
				isFavorite: newFavStatus,
			};
			return updatedProducts;
		});
	};

	// return the ProductsContext wrapping around all children as a provider
	// with value of the state of products
	return (
		// reason for putting in the key-value pair here is b/c that's how
		// the context was initially defined above inside the context - as an
		// object with a 'products' key and an array value, so here we input that
		// array value as the productsList which is a state managed inside this exported
		// component
		<ProductsContext.Provider
			value={{ products: productList, toggleFav: toggleFavorite }}
		>
			{props.children}
		</ProductsContext.Provider>
	);
};


// issues with using Context instead of Redux:
// on "high frequency" apps, where "high frequency" can be defined for example
// as something changes like 1/min - very imprecise definition. the point is
// that when something changes often, Context needs to access the entire
// context and rebuild with useContext instead of accessing only the relevant
// locations of the context/state. Context API is meant/built for changes things
// like authentication, themes, and such, but NOT meant for things like 
// products, likes, etc