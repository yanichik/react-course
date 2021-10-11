import "./History.css";
function History(props) {
	return props.transactions.length > 0
		? props.transactions.map((transaction) => {
				return (
					<ul key={transaction.key} className={transaction.amount < 0 ? 'ul-expense': 'ul-revenue'}>
						<span>{transaction.descr}</span>{transaction.amount}
					</ul>
				);
		  })
		: "";
}

export default History;
