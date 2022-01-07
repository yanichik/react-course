import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const firstAndLastNameValidation = (name) => {
		return name.trim() !== "";
	};
	const {
		value: firstNameValue,
		isTouched: firstNameTouched,
		isValid: firstNameIsValid,
		changeHandler: firstNameChangeHandler,
		hasError: firstNameHasError,
		reset: firstNameReset,
		blurHandler: firstNameBlurHandler,
	} = useInput(firstAndLastNameValidation);

	const {
		value: lastNameValue,
		isTouched: lastNameTouched,
		isValid: lastNameIsValid,
		changeHandler: lastNameChangeHandler,
		hasError: lastNameHasError,
		reset: lastNameReset,
		blurHandler: lastNameBlurHandler,
	} = useInput(firstAndLastNameValidation);

	const emailValidation = (email) => {
		return email.includes("@");
	};
	const {
		value: emailValue,
		isTouched: emailTouched,
		isValid: emailIsValid,
		changeHandler: emailChangeHandler,
		hasError: emailHasError,
		reset: emailReset,
		blurHandler: emailBlurHandler,
	} = useInput(emailValidation);

	const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

	const classesFunction = (error) => {
		return error ? "form-control invalid" : "form-control";
	};

	const submitHandler = (event) => {
		event.preventDefault();
		firstNameReset();
		lastNameReset();
		emailReset();
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="control-group">
				<div className={classesFunction(firstNameHasError)}>
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						id="firstName"
						value={firstNameValue}
						onBlur={firstNameBlurHandler}
						onChange={firstNameChangeHandler}
					/>
					{!firstNameIsValid && firstNameTouched && (
						<p className={"error-text"}>Name Invalid</p>
					)}
				</div>

				<div className={classesFunction(lastNameHasError)}>
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						id="lastName"
						value={lastNameValue}
						onBlur={lastNameBlurHandler}
						onChange={lastNameChangeHandler}
					/>
					{!lastNameIsValid && lastNameTouched && (
						<p className={"error-text"}>Last Name Invalid</p>
					)}
				</div>
			</div>
			<div className={classesFunction(emailHasError)}>
				<label htmlFor="email">Email Address</label>
				<input
					type="email"
					id="email"
					value={emailValue}
					onBlur={emailBlurHandler}
					onChange={emailChangeHandler}
				/>
				{!emailIsValid && emailTouched && (
					<p className={"error-text"}>Email Address Invalid</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
