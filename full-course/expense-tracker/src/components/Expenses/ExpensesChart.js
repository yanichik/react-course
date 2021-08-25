import Chart from "../Chart/Chart";

// purpose of ExpensesChart: create array of objects that will eventually hold the
// label and total value/amount of expenses in each month.
// then pass those dataPoints to Chart
function ExpensesChart(props) {
	const chartData = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "Mar", value: 0 },
		{ label: "Apr", value: 0 },
		{ label: "May", value: 0 },
		{ label: "Jun", value: 0 },
		{ label: "Jul", value: 0 },
		{ label: "Aug", value: 0 },
		{ label: "Sep", value: 0 },
		{ label: "Oct", value: 0 },
		{ label: "Nov", value: 0 },
		{ label: "Dec", value: 0 },
	];
	// console.log(props.expenses);
	for (const expense of props.expenses) {
		const expenseMonth = expense.date.getMonth();
		chartData[expenseMonth].value += expense.amount;
	}
	// console.log(chartData);
	return <Chart dataPoints={chartData} />;
}

export default ExpensesChart;
