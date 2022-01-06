import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredValueTouched, setEnteredValueTouched] = useState(false);
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
	let formIsValid = false;

	// instead of using state to track entered value validity, using the
	// enteredValue state to DERIVE validity. This CAN BE done b/c the component
	// re-renders with each change in enteredValue state, thus CAN rely
	// on this other state and derive validity
	const enteredValueValid = enteredValue.trim() !== "";
	const enteredEmailValid = enteredEmail.includes("@");
	if (enteredValueValid && enteredEmailValid) {
		formIsValid = true;
	}
	const nameChangeHandler = (event) => {
		setEnteredValue(event.target.value);
		// using event.target.value BECAUSE if checking the enteredValue, you are ACTUALLY
		// checking an OLD state b/c the setState function ONLY schedules the change -
		// it IS NOT immediate
		// if (event.target.value.trim() !== "") {
		// 	setEnteredValueValid(true);
		// }
	};
	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		setEnteredValueTouched(true);
		setEnteredEmailTouched(true);
		// 	if (enteredValue.trim() === "") {
		// 		return;
		// 	}
		setEnteredValue("");
		setEnteredEmail("");
		setEnteredValueTouched(false);
		setEnteredEmailTouched(false);
		// 	// inputRef.current.focus();
	};
	const nameBlurHandler = (event) => {
		setEnteredValueTouched(true);
	};
	const emailBlurHandler = (event) => {
		setEnteredEmailTouched(true);
	};

	const inputClassesFunction = (touched, valid) => {
		return touched && !valid ? "form-control invalid" : "form-control";
	};
  
	return (
		<form onSubmit={submitHandler}>
			<div
				className={inputClassesFunction(enteredValueTouched, enteredValueValid)}
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
				className={inputClassesFunction(enteredEmailTouched, enteredEmailValid)}
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
