import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";
function MealItem(props) {
	const cartCtx = useContext(CartContext);
	// console.log(cartCtx);
	const price = `$${props.price.toFixed(2)}`;
	function addToCartHandler(amount) {
		// console.log(cartCtx.total);
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			amount: amount,
		});
	}
	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
}
export default MealItem;
