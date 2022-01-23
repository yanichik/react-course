import { Fragment, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

const QuoteList = (props) => {
	const location = useLocation(); // info about the current URL
	const history = useHistory(); // access to URL history and can manipulate
	const [sortedQuotes, setSortedQuotes] = useState(props.quotes);

	const queryParams = new URLSearchParams(location.search);
	const [isSortAsc, setIsSortAsc] = useState(
		queryParams.get("sort") === "asc" ? true : false
	);

	function toggleSortHandler() {
		history.push("/quotes?sort=" + (isSortAsc ? "desc" : "asc"));
		setSortedQuotes((prevSortedQuotes) =>
			sortQuotes(prevSortedQuotes, isSortAsc)
		);
		setIsSortAsc((prevIsSortAsc) => !prevIsSortAsc);
	}
	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={toggleSortHandler}>
					Sort {isSortAsc ? "Descending" : "Ascending"}
				</button>
			</div>
			<ul className={classes.list}>
				{props.quotes &&
					sortedQuotes.map((quote) => (
						<QuoteItem
							key={quote.id}
							id={quote.id}
							author={quote.author}
							text={quote.text}
						/>
					))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
