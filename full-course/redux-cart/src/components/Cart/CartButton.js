import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/index";

const CartButton = (props) => {
	const dispatch = useDispatch();
	const cartQuantity = useSelector((state) => state.cart.totalItems);

	const toggleShowHandler = () => {
		dispatch(cartActions.toggleShow());
	};
	return (
		<button className={classes.button} onClick={toggleShowHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	);
};

export default CartButton;
