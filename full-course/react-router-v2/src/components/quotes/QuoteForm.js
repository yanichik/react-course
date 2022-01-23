import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
	const authorInputRef = useRef();
	const textInputRef = useRef();
	const [isFormStarted, setIsFormStarted] = useState(false);

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		// optional: Could validate here

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	function properSubmitHandler() {
		setIsFormStarted(false);
	}

	function startedFormHandler() {
		setIsFormStarted(true);
	}

	return (
		<>
			<Prompt
				when={isFormStarted}
				message={(location) =>
					"All info will be lost if you leave. Do you want to continue?"
				}
			/>
			<Card>
				<form className={classes.form} onSubmit={submitFormHandler}>
					{props.isLoading && (
						<div className={classes.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={classes.control}>
						<label htmlFor="author">Author</label>
						<input
							onChange={startedFormHandler}
							type="text"
							id="author"
							ref={authorInputRef}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="text">Text</label>
						<textarea
							onChange={startedFormHandler}
							id="text"
							rows="5"
							ref={textInputRef}
						></textarea>
					</div>
					<div className={classes.actions}>
						<button onClick={properSubmitHandler} className="btn">
							Add Quote
						</button>
					</div>
				</form>
			</Card>
		</>
	);
};

export default QuoteForm;
