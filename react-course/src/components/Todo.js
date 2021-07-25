// useState is React hook which can ONLY be called inside react component functions
// or in custom hooks (NOT covered_)
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
	// console.log(props)
	// calling useState inside component function, and NOT inside the nested function
	// "deleteTodo"

	// Destructure with brackets for Array destructuring
	// Set the initial state to 'false' b/c don't want modal to appear at start
	// useState returns Array of 2 elements:
	// 1st: shows the current state snapshot
	// 2nd: function called to change value stored in state
	const [isModalOpen, setIsModalOpen] = useState(false);
	function deleteTodo() {
		setIsModalOpen(true);
	}
	function closeModal() {
		setIsModalOpen(false);
	}
	return (
		<div className="card">
			<h2>{props.text}</h2>
			<div className="actions">
				<button className="btn" onClick={deleteTodo}>
					Delete
				</button>
			</div>
			{isModalOpen && <Modal onClick={closeModal} removeTodo={props.removeItem(props.text)}/>}
			{isModalOpen && <Backdrop onClick={closeModal} />}
		</div>
	);
}

export default Todo;
