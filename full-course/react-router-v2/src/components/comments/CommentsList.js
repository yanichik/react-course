import CommentItem from "./CommentItem";
import Comments from "./Comments";
// import { useParams } from "react-router-dom";
import { Route, Link, useRouteMatch } from "react-router-dom";
import classes from "./CommentsList.module.css";
import "../../index.css";

const CommentsList = (props) => {
	// const params = useParams();
	const match = useRouteMatch();
	console.log(match);
	return (
		<>
			{/* <Route path={`/quotes/:quoteId/`} exact> */}
			<Route path={`${match.url}/`} exact>
				<div className="centered">
					{/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Show Comments
					</Link>
				</div>
			</Route>
			{/* <Route path={`/quotes/:quoteId/comments`} exact> */}
			<Route path={`${match.path}/comments`} exact>
				<div className="centered">
					<ul className={classes.comments}>
						{props.comments.map((comment) => (
							<CommentItem key={comment.id} text={comment.text} />
						))}
					</ul>
				</div>
				<Comments />
			</Route>
		</>
	);
};

export default CommentsList;
