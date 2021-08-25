import "./ChartBar.css";

// purpose of ChartBar: render bar with a label and fill height based on the value/amount
// of expenses in that month compared to max expense amount as a percentage
function ChartBar(props) {
	let barHeight = "0%";

	if (props.maxValue > 0) {
		// console.log("value: " + props.value);
		// console.log("maxValue: " + props.maxValue);
		barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
		// console.log(barHeight);
	}
	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				{/* sets the height of the bar in % by inputting css syntax into style */}
				<div className="chart-bar__fill" style={{ height: barHeight }}></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
}

export default ChartBar;
