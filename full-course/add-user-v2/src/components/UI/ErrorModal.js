import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
function ErrorModal(props) {
	return (
		<>
			<div className={styles.backdrop} onClick={props.onConfirm} />
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={styles.content}>{props.message}</div>
				<footer className={styles.actions}>
					<Button type="submit" onClick={props.onConfirm}>Okay</Button>
				</footer>
			</Card>
		</>
	);
}

export default ErrorModal;
