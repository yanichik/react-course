import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";
function App() {
	// state that determines when cart modal opens in an overlay
	const [showCart, setShowCart] = useState(false);
	// closes cart modal
	function closeCartHandler() {
		setShowCart(false);
	}
	// open cart modal
	function openCartHandler() {
		setShowCart(true);
	}
	return (
		// Cart Provider provides the context, which is the app-wide data sharing.
		// In this case, it's sharing the menu items, prices, and amounts which can be
		// used in all parts of the app. Since App.js is the head of the app, this is
		// the perfect place to share from such that it distributes to the entire app
		<CartProvider>
			{/* Header contains the app name and portal to cart, also passing in function
      to open cart, which is controlled by a click of the cart button contained
      inside the cart button inside the header */}
			<Header onOpenCart={openCartHandler} />
			<main>
				<Meals showCartStatus={showCart} onCloseCart={closeCartHandler} />
			</main>
		</CartProvider>
	);
}

export default App;
