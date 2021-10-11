import "./Balance.css";

function Balance(props) {
	console.log("Balance: ");
	console.log(props);
	return (
		<>
			<h3 className='balance'>Balance<br></br>${props.total}</h3>
			<div className="expenses_revenues">
				<p className="revenues">
					Revenues<br></br>${props.revenues}
				</p>
				<div className='vl'></div>
				<p className="expenses">
					Expenses<br></br>${Math.abs(props.expenses)}
				</p>
			</div>
		</>
	);
}

export default Balance;
