import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	// setTitle can change the value of 'title' AND re-execute/render the ExpenseItem component,
	// which is the most important aspect b/c simply changing the value with an = doesn't do that
	const [title, setTitle] = useState(props.title);
	function titleHandler() {
		setTitle('Updated!');
	}
	// console.log('component rendered')
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={titleHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
