import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
	function saveExpenseHandler(expense) {
    // console.log(expense);
    const expenseData = {
      ...expense,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }
	return (
		<div className="new-expense">
      {/* passing 'onSaveExpense to ExpenseForm.js with a pointer to 'saveExpenseHandler'
      which defines creation of new variable consisting of the new expense info + added
      random id */}
			<ExpenseForm onSaveExpense={saveExpenseHandler} />
		</div>
	);
}

export default NewExpense;
