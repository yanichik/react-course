import styles from "./CartItem.module.css";
function CartItem(props) {
	return (
		<>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.item}>
					<span className={styles.price}>${props.price.toFixed(2)}</span>
					<span className={styles.amount}>x{props.amount}</span>
					<div className={styles.buttons}>
					<button onClick={props.onRemove} className={styles.button}>
						-
					</button>
					<button onClick={props.onAdd} className={styles.button}>
						+
					</button>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}
export default CartItem;
