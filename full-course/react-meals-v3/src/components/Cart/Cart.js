import { useContext } from "react";
import CartContext from "../store/cart-context";
import styles from "./Cart.module.css";
import CartModal from "../UI/CartModal";
import CartItem from "./CartItem";
function Cart(props) {
	const cartCtx = useContext(CartContext);
	function cartItemAddHandler(item) {
		// add just one at a time. Otherwise just adding 'item' will add the object with
		// amount of current amount in cart, essentially doubling the amount with each add
		cartCtx.addItem({ ...item, amount: 1 });
	}
	function cartItemRemoveHandler(id) {
		cartCtx.removeItem(id);
	}
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
	// const sendOrderRequest = async (orderArray) => {
	const sendOrderRequest = async () => {
		const sendBody = {
			total: cartCtx.total,
			items: cartCtx.items.map((item) => {
				return {
					name: item.name,
					price: item.price,
					amount: item.amount,
					subtotal: item.price * item.amount,
				};
			}),
		};
		console.log(sendBody);
		const configUrl =
			"https://react-http-104c4-default-rtdb.firebaseio.com/cart.json";
		const configObject = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			// body: JSON.stringify({ text: "abc" }),
			body: JSON.stringify(sendBody),
		};
		// const rsvp = await fetch(configUrl, configObject);
		await fetch(configUrl, configObject);
	};

	const cartSubmitHandler = (event) => {
		event.preventDefault();
		console.log(cartCtx);
		sendOrderRequest();
	};
	return (
		<div>
			<CartModal onCloseCart={props.onCloseCart}>
				{cartItems}
				<div className={styles.total}>
					<span>Total Amount</span>
					<span>${Math.abs(cartCtx.total).toFixed(2)}</span>
				</div>
				<div className={styles.actions}>
					<button className={styles["button--alt"]} onClick={props.onCloseCart}>
						Close
					</button>
					<form onSubmit={cartSubmitHandler}>
						<button className={styles["button"]}>Order</button>
					</form>
				</div>
			</CartModal>
		</div>
	);
}

export default Cart;
