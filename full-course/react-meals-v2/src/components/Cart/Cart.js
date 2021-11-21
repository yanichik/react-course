import styles from "./Cart.module.css";
import CartModal from "../UI/CartModal";
function Cart(props) {
	const cartItems = (
		<ul className={styles["cart-items"]}>
			{[{ id: "c1", name: "Sushi", amount: "2", price: "11.99" }].map(
				(item) => (
					<li key={item.id}>{item.name}</li>
				)
			)}
		</ul>
	);
	return (
		<div onClick={props.onCloseCart}>
			<CartModal>
				{cartItems}
				<div className={styles.total}>
					<span>Total Amount</span>
					<span>$44.00</span>
				</div>
				<div className={styles.actions}>
					<button className={styles["button--alt"]} onClick={props.onCloseCart}>Close</button>
					<button className={styles["button"]}>Order</button>
				</div>
			</CartModal>
		</div>
	);
}

export default Cart;
