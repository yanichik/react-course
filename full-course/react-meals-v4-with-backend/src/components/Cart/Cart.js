import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
	const [inCheckout, setInCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
		if (cartCtx.items.length === 1) {
			setInCheckout(false);
		}
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const checkoutHandler = () => {
		setInCheckout(true);
	};

	const sendOrderHandler = async (userData) => {
		setIsSubmitting(true);
		await fetch(
			"https://react-http-104c4-default-rtdb.firebaseio.com/order.json",
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					userData,
					orderData: { items: cartCtx.items, total: cartCtx.totalAmount },
				}),
			}
		);
		setDidSubmit(true);
		setIsSubmitting(false);
		cartCtx.clearCart();
	};

	const modalActions = (
		<>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				{hasItems && (
					<button className={classes.button} onClick={checkoutHandler}>
						Order
					</button>
				)}
			</div>
		</>
	);

	const cartModalContent = (
		<>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{inCheckout && hasItems && (
				<Checkout onConfirm={sendOrderHandler} onCancel={props.onClose} />
			)}
			{!inCheckout && modalActions}
		</>
	);

	const submittingModalContent = (
		<>
			<p>Your Order is Processing ...</p>
		</>
	);

	const submittedModalContent = (
		<>
			<p>Your Order Has Been Submitted!</p>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClose}>
					Close
				</button>
			</div>
		</>
	);

	return (
		<Modal onClose={props.onClose}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && !didSubmit && submittingModalContent}
			{didSubmit && submittedModalContent}
		</Modal>
	);
};

export default Cart;
