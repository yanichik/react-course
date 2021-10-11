import { useRef } from "react";
import "./NewTransaction.css";

function NewTransaction(props) {
	const descrRef = useRef();
	const amountRef = useRef();

	function submitHandler(e) {
		e.preventDefault();
		const transaction = {
			amount: parseInt(amountRef.current.value),
			descr: descrRef.current.value,
		};
		// console.log(typeof transaction.amount)
		props.onNewTransaction(transaction);
		amountRef.current.value = "";
		descrRef.current.value = "";
	}

	return (
		<div className="form">
			<form onSubmit={submitHandler}>
				<div className='description'>
					<label htmlFor="description" pointing="true">
						Description
					</label>
					<input type="text" id='description' placeholder="Type Something" ref={descrRef}/>
				</div>
				<div className='amount'>
					<label htmlFor="amount" pointing="true">
						Amount
					</label>
					<input type="number" id='amount' step="0.01" placeholder="$" ref={amountRef} />
				</div>
				<div>
					<button type="submit">Add Transaction</button>
				</div>
			</form>
		</div>
	);
}

export default NewTransaction;
