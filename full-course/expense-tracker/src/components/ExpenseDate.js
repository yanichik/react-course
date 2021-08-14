import './ExpenseDate.css'

// splitting this component off of ExpenseItem in order to make that
// one more compact. passing in props here requires to funnel props.date
// from the ExpenseItem component to here
function ExpenseDate(props) {
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const day = props.date.toLocaleString("en-US", { day: "numeric" });
	const year = props.date.toLocaleString("en-US", { year: "numeric" });
	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__day">{day}</div>
			<div className="expense-date__year">{year}</div>
		</div>
	);
}

export default ExpenseDate;
