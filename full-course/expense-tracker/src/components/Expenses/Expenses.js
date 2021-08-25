import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState("2020");
	function selectedYearHandler(year) {
		setSelectedYear(year);
	}
	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear() === parseInt(selectedYear)
	);
	return (
		<Card className="expenses">
			<ExpensesFilter
				onSelectedYear={selectedYearHandler}
				initialSelectedYear={selectedYear}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} selectedYear={selectedYear} />
		</Card>
	);
}

export default Expenses;
