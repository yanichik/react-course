import { useState } from "react";
import "./App.css";
import NewTransaction from "./components/NewTransaction";
import History from "./components/History";
import Balance from "./components/Balance";
import "./App.css";

function addExpense(transaction) {
	if (transaction < 0) {
		return transaction;
	} else return 0;
}

function addRevenue(transaction) {
	if (transaction > 0) {
		return transaction;
	} else return 0;
}

function App() {
	const [transactions, setTransactions] = useState([]);
	const [balance, setBalance] = useState({
		total: 0,
		expenses: 0,
		revenues: 0,
	});
	function newTransactionHandler(newTransaction) {
		console.log(newTransaction);
		setTransactions((prev) => {
			// console.log(newTransaction.amount);
			return [
				...prev,
				{
					key: Math.random(),
					amount: parseInt(newTransaction.amount),
					descr: newTransaction.descr,
				},
			];
		});
		setBalance((prevBal) => {
			console.log(prevBal);
			let len = transactions.length;
			if (len > 1) {
				return {
					total:
						parseInt(prevBal.total) + parseInt(transactions[len - 1].amount),
					expenses:
						prevBal.expenses +
						addExpense(parseInt(transactions[len - 1].amount)),
					revenues:
						prevBal.revenues +
						addRevenue(parseInt(transactions[len - 1].amount)),
				};
			} else if (len === 1) {
				return {
					total: parseInt(transactions[len - 1].amount),
					expenses: addExpense(parseInt(transactions[len - 1].amount)),
					revenues: addRevenue(parseInt(transactions[len - 1].amount)),
				};
			} else {
				return { total: 0, expenses: 0, revenues: 0 };
			}
		});
	}
	return (
		<>
			<div className="App">
				<h1 className="h1">Expense Tracker</h1>
				<Balance
					revenues={balance.revenues}
					expenses={balance.expenses}
					total={balance.total}
				/>
				<h3 className="history">History</h3>
				<hr />
				<History transactions={transactions} />
				<h3 className='new-transaction'>Add New Transaction</h3>
				<hr />
				<NewTransaction
					onNewTransaction={newTransactionHandler}
				></NewTransaction>
			</div>
		</>
	);
}

export default App;
