import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		// if typed value is not just blank spaces, then set isValid to true to reset the inline styling inside label + input
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
	};

	return (
		<form onSubmit={formSubmitHandler}>
      {/* add logic to dynamically include 'invalid' class when isValid is false */}
			<div className={`form-control ${!isValid ? "invalid" : ""}`}>
				<label>Course Goal</label>
				<input type="text" onChange={goalInputChangeHandler} />
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
