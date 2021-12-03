import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";
import { useContext, useEffect, useState } from "react";
function HeaderCartButton(props) {
	// bump effect starts at false so it doesn't bump at refresh
	const [activateBump, setActivateBump] = useState(false);
	// cartCtx is the global cart context object from which the global state can be accessed & updated
	const cartCtx = useContext(CartContext);
	// numCartItems takes from the cart context to display the current state
	// of the menu and amounts per menu item
	const numCartItems = cartCtx.items.reduce((prevNum, curItem) => {
		return prevNum + curItem.amount;
	}, 0);
	// btnStyles always includes the button style and on condition includes the bump style
	const btnStyles = `${styles.button} ${activateBump ? styles.bump : ""} `;
	//using useEffect to create bump b/c it's a side effect.
	useEffect(() => {
		// no bump when cart is empty
		if (cartCtx.items.length === 0) {
			return;
		}
		setActivateBump(true);
		//set timeout to turn off bump after 300ms, since that is the time length of the bump itself
		const timer = setTimeout(() => setActivateBump(false), 300);
		// cleanup function to clear timeout
		// return () => clearTimeout(timer);
		// useEffect activated ONLY when cartCtx changes, which occurs with additions/subtractions
		// to cart
	}, [cartCtx]);
	return (
		<button className={btnStyles} onClick={props.onOpenCart}>
			<span className={styles.icon}>
				{/* CartIcon is a component function that returns svg code.
				SVG code is simply html that enables to make graphics.
				SVG => scalable vector graphics */}
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={styles.badge}>{numCartItems}</span>
		</button>
	);
}

export default HeaderCartButton;
