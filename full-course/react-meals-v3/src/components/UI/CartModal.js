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
		{/* portal allows to place code inside portal at any desired
		DOM location. In this case, placing above root in index.html */}
			{reactDom.createPortal(
				<Backdrop onClick={props.onCloseCart} />,
				portalElement
			)}
			{/* children going into the overlay, which means that anything that is
			wrapped by the CartModal component goes into here. And the only item
			that is being wrapped by the CartModal component is the Cart itself */}
			{reactDom.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
}
export default CartModal;
