import ChartBar from "./ChartBar";
import "./Chart.css";

// purpose of Chart: map the array of objects data points to an array of values.
// then find the max value.
// then in the return statement: loop through the 12 data points (for 12 months),
// and render a ChartBar with passed down properties: key, value, maxValue, label
function Chart(props) {
	// console.log(props.dataPoints);
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	// console.log(dataPointValues);
	const totMax = Math.max(...dataPointValues);
	// console.log(totMax);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => {
				// console.log(dataPoint.value);
				return (
					<ChartBar
						key={dataPoint.label}
						value={dataPoint.value}
						maxValue={totMax}
						label={dataPoint.label}
					/>
				);
			})}
		</div>
	);
}

export default Chart;
