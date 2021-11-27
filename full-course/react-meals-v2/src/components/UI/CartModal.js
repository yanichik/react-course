import styles from "./CartModal.module.css";
import reactDom from "react-dom";
function Backdrop(props) {
	return <div className={styles.backdrop} onClick={props.onClick}></div>;
}
function ModalOverlay(props) {
	return <div className={styles.modal}>{props.children}</div>;
}
const portalElement = document.getElementById("overlays");
function CartModal(props) {
	return (
		<>
			{reactDom.createPortal(
				<Backdrop onClick={props.onCloseCart} />,
				portalElement
			)}
			{reactDom.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
}
export default CartModal;
