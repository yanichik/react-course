import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
	return (
		<button className={styles.button} onClick={props.onOpenCart}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={styles.badge}>5</span>
		</button>
	);
}

export default HeaderCartButton;
