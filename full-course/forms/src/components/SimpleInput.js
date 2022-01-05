import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [enteredValueTouched, setEnteredValueTouched] = useState(false);

	// instead of using state to track entered value validity, using the
	// enteredValue state to DERIVE validity. This CAN BE done b/c the component
	// re-renders with each change in enteredValue state, thus CAN rely
	// on this other state and derive validity
	const enteredValueValid = enteredValue.trim() !== "";

	const inputChangeHandler = (event) => {
		setEnteredValue(event.target.value);
		// using event.target.value BECAUSE if checking the enteredValue, you are ACTUALLY
		// checking an OLD state b/c the setState function ONLY schedules the change -
		// it IS NOT immediate
		// if (event.target.value.trim() !== "") {
		// 	setEnteredValueValid(true);
		// }
	};
	const submitHandler = (event) => {
		event.preventDefault();
		setEnteredValueTouched(true);
		if (enteredValue.trim() === "") {
			return;
		}
		setEnteredValue("");
		setEnteredValueTouched(false);
		// inputRef.current.focus();
	};
	const inputBlurHandler = (event) => {
		setEnteredValueTouched(true);
	};
	const nameInputClasses =
		enteredValueTouched && !enteredValueValid
			? "form-control invalid"
			: "form-control";
	return (
		<form onSubmit={submitHandler}>
			<div className={nameInputClasses}>
				{/* <div className='form-control'> */}
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={inputChangeHandler}
					onBlur={inputBlurHandler}
					value={enteredValue}
				/>
				{enteredValueTouched && !enteredValueValid && (
					<p className={"error-text"}>Invalid Entry</p>
				)}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
