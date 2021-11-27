import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";
function App() {
	const [showCart, setShowCart] = useState(false);
	function closeCartHandler() {
		setShowCart(false);
	}
	function openCartHandler() {
		setShowCart(true);
	}
	return (
		<CartProvider>
			<Header onOpenCart={openCartHandler} />
			<main>
				<Meals showCartStatus={showCart} onCloseCart={closeCartHandler} />
			</main>
		</CartProvider>
	);
}

export default App;
