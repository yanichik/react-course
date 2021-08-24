import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
	if (props.items.length === 0) {
		return (
			<p className="expenses-list__fallback">
				No expenses in {props.selectedYear}
			</p>
		);
	} else {
		return props.items.map((expense) => {
			return (
				<ExpenseItem
					className="expenses-list"
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			);
		});
	}
}
export default ExpensesList;
