import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const CartItem = (props) => {
	const dispatch = useDispatch();
	const allItems = useSelector((state) => state.cart.items);
	const plusItemHandler = () => {
		console.log("adding item - pre: " + allItems[0].quantity);
		dispatch(cartActions.addOneToItem(props.item.id));
		console.log("adding item - post: " + allItems[0].quantity);
	};
	const minusItemHandler = () => {
		if (props.item.quantity === 1) {
			dispatch(cartActions.subtractOneFromItem(props.item.id));
			// console.log("removing item - pre: " + allItems[0].quantity);
			dispatch(cartActions.removeItem(props.item.id));
			// console.log("removing item - post: " + allItems[0].quantity);
		} else {
			dispatch(cartActions.subtractOneFromItem(props.item.id));
		}
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{props.item.title}</h3>
				<div className={classes.price}>
					${props.item.totalPrice.toFixed(2)}{" "}
					<span className={classes.itemprice}>
						(${props.item.price.toFixed(2)}/item)
					</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{props.item.quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={minusItemHandler}>-</button>
					<button onClick={plusItemHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
