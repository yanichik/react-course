import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const ProductItem = (props) => {
	// const allItems = useSelector((state) => state.cart.items);
	// console.log(allItems);
	const dispatch = useDispatch();
	const { title, price, description } = props.item;
	const addToCartHandler = () => {
		// console.log(allItems);
		dispatch(cartActions.addNewItem(props.item));
		// console.log(allItems);
	};
	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={addToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
