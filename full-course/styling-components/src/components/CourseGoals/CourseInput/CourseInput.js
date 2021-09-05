import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// div as a styled component
// const FormControl = styled.div`
// 	margin: 0.5rem 0;

// 	& label {
// 		font-weight: bold;
// 		display: block;
// 		margin-bottom: 0.5rem;
//     // dynamic color inside the styled component
//     color: ${props => props.invalid ? 'red' : 'black'};
// 	}

// 	& input {
// 		display: block;
// 		width: 100%;
// 		border: 1px solid #ccc;
// 		font: inherit;
// 		line-height: 1.5rem;
// 		padding: 0 0.25rem;
//     background-color: ${props => props.invalid ? 'salmon' : 'transparent'};
// 		border-color: ${props => props.invalid ? 'red' : 'black'};
// 	}

// 	& input:focus {
// 		outline: none;
// 		background: #fad0ec;
// 		border-color: #8b005d;
// 	}

// `;

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
			{/* FormControl is a div styled component */}
			{/* <FormControl invalid={!isValid}> */}
			<div
				className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
			>
				<label>Course Goal</label>
				<input type="text" onChange={goalInputChangeHandler} />
			</div>
			{/* </FormControl> */}
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
