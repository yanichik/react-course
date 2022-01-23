import CommentItem from "./CommentItem";
import Comments from "./Comments";
import { Route, useParams } from "react-router-dom";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
	const params = useParams();
	console.log(params.quoteId);
	return (
		<>
			<ul className={classes.comments}>
				{props.comments.map((comment) => (
					<CommentItem key={comment.id} text={comment.text} />
				))}
			</ul>
			<Route path={`/quotes/:quoteId/comments`}>
				{console.log("inside route")}
				<Comments />
			</Route>
		</>
	);
};

export default CommentsList;
