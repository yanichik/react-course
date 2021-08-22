import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState("2020");
	function selectedYearHandler(year) {
		setSelectedYear(year);
	}
	return (
		<Card className="expenses">
			<div>
				<ExpensesFilter
					onSelectedYear={selectedYearHandler}
					initialSelectedYear={selectedYear}
				/>
			</div>
			<ExpenseItem
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
			></ExpenseItem>
			<ExpenseItem
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
			></ExpenseItem>
			<ExpenseItem
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
			></ExpenseItem>
			<ExpenseItem
				title={props.expenses[3].title}
				amount={props.expenses[3].amount}
				date={props.expenses[3].date}
			></ExpenseItem>
		</Card>
	);
}

export default Expenses;
