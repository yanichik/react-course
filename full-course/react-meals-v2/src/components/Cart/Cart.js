import { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./Cart.module.css";
import CartModal from "../UI/CartModal";
import CartItem from "./CartItem";
function Cart(props) {
	const cartCtx = useContext(CartContext);
	function cartItemAddHandler(item) {}
	function cartItemRemoveHandler(id) {}
	const cartItems = (
		<ul className={styles["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					price={item.price}
					amount={item.amount}
					total={cartCtx.total}
					onAdd={cartItemAddHandler.bind(null, item)}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);
	return (
		<div>
			<CartModal onCloseCart={props.onCloseCart}>
				{cartItems}
				<div className={styles.total}>
					<span>Total Amount</span>
					<span>${cartCtx.total.toFixed(2)}</span>
				</div>
				<div className={styles.actions}>
					<button className={styles["button--alt"]} onClick={props.onCloseCart}>
						Close
					</button>
					<button className={styles["button"]}>Order</button>
				</div>
			</CartModal>
		</div>
	);
}

export default Cart;
