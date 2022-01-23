import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-actions";
import { fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const cart = useSelector((state) => state.cart);
	const cartChanged = useSelector((state) => state.cart.cartChanged);
	const notification = useSelector((state) => state.ui.showNotification);

	useEffect(() => {
		if (isInitial) {
			dispatch(fetchCartData());
			isInitial = false;
			return;
		}
		// Normally with redux we dispatch an action.
		// Redux also allows to dispatch a function, which in turn dispatches an action.
		// Redux automatically passes along the dispatch function to the sendCartData function,
		// b/c it recognizes that you're passing in a function and alows dispatch to be called
		// within that 'sendCartData' function
		dispatch(sendCartData(cart));
	}, [cart, dispatch]);
	return (
		<>
			{notification.status  && cartChanged && (
				<Notification notification={notification} />
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
