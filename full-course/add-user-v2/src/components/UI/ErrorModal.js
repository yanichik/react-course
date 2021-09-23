import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function Backdrop(props) {
	return <div className={styles.backdrop} onClick={props.onConfirm} />;
}

function Overlay(props) {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>{props.message}</div>
			<footer className={styles.actions}>
				<Button type="submit" onClick={props.onConfirm}>
					Okay
				</Button>
			</footer>
		</Card>
	);
}

function ErrorModal(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("root-backdrop")
			)}
			{ReactDOM.createPortal(
				<Overlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById("root-overlay")
			)}
		</>
	);
}

export default ErrorModal;
