import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";
function HeaderCartButton(props) {
	const cartCtx = useContext(CartContext);
	// console.log(CartContext);
	// console.log(cartCtx.items);
	//  numCartItems return total num of items, including repeat items.
	// This allows for multiple amounts of same item
	const numCartItems = cartCtx.items.reduce((prevNum, curItem) => {
		// console.log("curItem:", curItem.amount);
		return prevNum + curItem.amount;
	}, 0);
	// console.log('# Cart Items:', numCartItems);
	return (
		<button className={styles.button} onClick={props.onOpenCart}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={styles.badge}>{numCartItems}</span>
		</button>
	);
}

export default HeaderCartButton;
