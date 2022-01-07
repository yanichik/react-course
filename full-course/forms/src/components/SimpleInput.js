// import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

	const {
		value: enteredValue,
		isTouched: enteredValueTouched,
		isValid: enteredValueValid,
		changeHandler: nameChangeHandler,
		hasError: nameHasError,
		reset: resetName,
		blurHandler: nameBlurHandler,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		isTouched: enteredEmailTouched,
		isValid: enteredEmailValid,
		changeHandler: emailChangeHandler,
		hasError: emailHasError,
		reset: resetEmail,
		blurHandler: emailBlurHandler,
	} = useInput((email) => email.includes("@"));

	let formIsValid = false;
	if (enteredValueValid && enteredEmailValid) {
		formIsValid = true;
	}

	const submitHandler = (event) => {
		event.preventDefault();
		resetName();
		resetEmail();
		// setEnteredEmailTouched(true);
		// setEnteredEmail("");
		// setEnteredEmailTouched(false);
		// 	// inputRef.current.focus();
	};
	const classesFunction = (error) => {
		return error ? "form-control invalid" : "form-control";
	};

	return (
		<form onSubmit={submitHandler}>
			<div
				// className={inputClassesFunction(enteredValueTouched, enteredValueValid)}
				className={classesFunction(nameHasError)}
			>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={enteredValue}
				/>
				{enteredValueTouched && !enteredValueValid && (
					<p className={"error-text"}>Invalid Entry</p>
				)}
			</div>
			<div
				className={classesFunction(emailHasError)}
			>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{enteredEmailTouched && !enteredEmailValid && (
					<p className={"error-text"}>Invalid Entry</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
