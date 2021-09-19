import React, { useRef } from "react";
import styles from "./Modal.module.css";

function Modal(props) {
	// close the modal when clicking outside the modal.
	const modalRef = useRef();
	const closeModal = (e) => {
		if (e.target === modalRef.current) {
			props.setModal(false);
		}
	};

	return (
		<div className={styles.container} ref={modalRef} onClick={closeModal}>
			<div className={styles.modal}>
				<h2>{props.modalMsg}</h2>
				<button onClick={() => props.setModal(false)}>X</button>
			</div>
		</div>
	);
}

export default Modal;
