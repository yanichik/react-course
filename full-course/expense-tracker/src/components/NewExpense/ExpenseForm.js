import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
	// preferred way: Multiple states, NOT single state
	// Multiple States:
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// Single State:
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	function titleChangeHandler(e) {
		// preferred way: Multiple states, NOT single state
		setEnteredTitle(e.target.value);

		// when setting state, the changed state is always in string format.
		// setUserInput({
		// when updating with handler must "update" all elements of object, otherwise if
		// updating only one, the rest will be dropped. the workaround is to use the spread operater
		// to bring in all of the values and then ONLY update the one you want with this specific
		// handler
		// 	...userInput,
		// 	enteredTitle: e.target.value,
		// });
		// IF/WHEN new state depends on previous state, use anonymous func to set state:
		// setUserInput((prevState) => {
		//   return {
		//     ...prevState,
		//     enteredTitle: e.target.value
		//   };
		// }
	}

	function amountChangeHandler(e) {
		// preferred way: Multiple states, NOT single state
		setEnteredAmount(e.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: e.target.value,
		// });
	}
	function dateChangeHandler(e) {
		// preferred way: Multiple states, NOT single state
		setEnteredDate(e.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enteredDate: e.target.value,
		// });
	}

	function submitHandler(e) {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		console.log(typeof(expenseData.amount));
		// onSaveExpense is passed in through props from 'NewExpense.js' as function
		// to define what's to be done once expense is submitted
		props.onSaveExpense(expenseData);

		// resets the states for each of these fields so on re-render they'll be reset
		setEnteredAmount("");
		setEnteredTitle("");
		setEnteredDate("");
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min=".01"
						step=".01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}
export default ExpenseForm;
