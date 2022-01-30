import {
	Redirect,
	Route,
	Switch,
	useHistory,
	useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import CommentsList from "./components/comments/CommentsList";
import QuoteList from "./components/quotes/QuoteList";
import QuoteForm from "./components/quotes/QuoteForm";
import MainNavigation from "./components/layout/MainNavigation";
import HighlightedQuote from "./components/quotes/HighlightedQuote";
function App() {
	const [quotes, setQuotes] = useState([]);
	const [isSubmitted, setIsSubmmitted] = useState(false);
	const history = useHistory(); // access to URL history and allows to make changes
	const location = useLocation();
	const [currentId, setCurrentId] = useState();
	const currentQuote = quotes.find((element) => element.id === currentId);

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
					<HighlightedQuote text="Never give up!" author="Yan" />
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
