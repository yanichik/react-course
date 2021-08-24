import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
	const [form, setForm] = useState(false);
	function saveExpenseHandler(expense) {
		// console.log(expense);
		const expenseData = {
			...expense,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
    setForm((prevForm) => !prevForm);
	}

	function formToggleHandler() {
		setForm((prevForm) => !prevForm);
	}

	const addNewExpBtn = (
		<button onClick={formToggleHandler}>Add New Expense</button>
	);

	return (
		<div className="new-expense">
			{/* passing 'onSaveExpense to ExpenseForm.js with a pointer to 'saveExpenseHandler'
      which defines creation of new variable consisting of the new expense info + added
      random id */}
			{form ? (
				<ExpenseForm
					onSaveExpense={saveExpenseHandler}
					onCancel={formToggleHandler}
				/>
			) : (
				addNewExpBtn
			)}
		</div>
	);
}

export default NewExpense;
