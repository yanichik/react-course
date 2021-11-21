import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
function App() {
	const [showCart, setShowCart] = useState(false);
	function closeCartHandler() {
		setShowCart(false);
	}
	function openCartHandler() {
		setShowCart(true);
	}
	return (
		<>
			<Header onOpenCart={openCartHandler} />
			<main>
				<Meals showCartStatus={showCart} onCloseCart={closeCartHandler} />
			</main>
		</>
	);
}

export default App;
