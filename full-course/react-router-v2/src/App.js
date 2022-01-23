import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
// import Comments from "./components/comments/Comments";
import CommentsList from "./components/comments/CommentsList";
import QuoteList from "./components/quotes/QuoteList";
import QuoteForm from "./components/quotes/QuoteForm";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
	const [quotes, setQuotes] = useState([]);
	const [isSubmitted, setIsSubmmitted] = useState(false);
	const history = useHistory();

	const addQuoteHandler = (quote) => {
		// setIsSubmmitted((prevIsSubmitted) => true);
		setQuotes((prevQuotes) => {
			const enteredQuote = { ...quote, id: prevQuotes.length + 1 };
			return [...prevQuotes, enteredQuote];
		});
		// useHistory instead of the redirect
		history.push("/quotes");
	};
	useEffect(() => {
		if (isSubmitted) {
			setIsSubmmitted(false);
		}
	}, [isSubmitted]);

	return (
		<div>
			<MainNavigation />
			<Switch>
				<Route path="/" exact>
					<Redirect to="/quotes"></Redirect>
				</Route>
				<Route path="/quotes" exact>
					<QuoteList quotes={quotes} />
				</Route>
				{/* To enter CommentsList path DO NOT use 'exact' b/c inside CommentsList
        you have a nested path to reach Comments, which WILL NOT work due to the
        'exact' parameter, as it will prevent entrance into CommentsList */}
				<Route path="/quotes/:quoteId">
					<CommentsList comments={[{ id: 1, text: "nice quote" }]} />
				</Route>
				<Route path="/add-quote" exact>
					<QuoteForm onAddQuote={addQuoteHandler} />
					{isSubmitted && (
						<Redirect to="/quotes">
							<QuoteForm onAddQuote={addQuoteHandler} />
						</Redirect>
					)}
				</Route>
			</Switch>
		</div>
	);
}

export default App;
