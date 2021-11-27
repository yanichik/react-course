import { useState, useRef } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
function MealItemForm(props) {
	const [amountValid, setAmountValid] = useState(true);
	const inputAmtRef = useRef();
	function submitHandler(event) {
		event.preventDefault();
		// console.log(inputAmtRef.current.value);
		const enteredAmount = inputAmtRef.current.value;
		const enteredAmountNum = +enteredAmount;
		if (enteredAmountNum > 5 || enteredAmountNum < 1 || !enteredAmount) {
			setAmountValid(false);
			return;
		}
		setAmountValid(true);
		// console.log(event.target[0].value);
		props.onAddToCart(enteredAmountNum);
	}
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={inputAmtRef}
				input={{
					id: "amount_" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
				label="Amount"
			/>
			<button>Add</button>
			{!amountValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
}
export default MealItemForm;
