import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Max", text: "Learning React is fun!" },
	{ id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
	const { sendRequest, data, error, status } = useHttp(getSingleQuote, true);
	const match = useRouteMatch();
	const params = useParams();
	const { quoteId } = params;
	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (error) {
		return <p className="centered">{error}</p>;
	}
	if (status === "pending") {
		return <LoadingSpinner />;
	}
	if (!data.text) {
		return <p className="centered">No quote found!</p>;
	}

	return (
		<Fragment>
			<HighlightedQuote text={data.text} author={data.author} />
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
