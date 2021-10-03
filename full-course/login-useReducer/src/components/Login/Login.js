import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

function emailReducer(state, action) {
	switch (action.type) {
		case "INPUT":
			return { value: action.payload, isValid: action.payload.includes("@") };
		case "INPUT_BLUR":
			return { value: state.value, isValid: state.value.includes("@") };
		default:
			return { value: "", isValid: false };
	}
}
function passwordReducer(state, action) {
	switch (action.type) {
		case "INPUT":
			return { value: action.payload, isValid: action.payload.length > 6 };
		case "INPUT_BLUR":
			return {
				value: state.value,
				isValid: state.value.length > 6 ? true : false,
			};
		default:
			return { value: "", isValid: false };
	}
}

const Login = (props) => {
	const initialEmailState = { value: "", isValid: false };
	const initialPasswordState = { value: "", isValid: false };
	const [emailState, dispatchEmail] = useReducer(
		emailReducer,
		initialEmailState
	);
	const [passwordState, dispatchPassword] = useReducer(
		passwordReducer,
		initialPasswordState
	);
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState("");
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	useEffect(() => {
		console.log("EFFECT RUNNING");

		return () => {
			console.log("EFFECT CLEANUP");
		};
	}, []);

// object destructuring. emailIsValid and passwordIsValid are aliases
	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log("Checking form validity!");
			setFormIsValid(
				emailState.value.includes("@") && passwordState.value.trim().length > 6
			);
		}, 500);

		return () => {
			console.log("CLEANUP");
			clearTimeout(identifier);
		};
    // here passing in the properties of emailState & passwordState that were destructured and 
    // given aliases in lines 57-58. if we pass in the entire states then useEffect with run
    // whenever any property of either state with change. But this way, it only runs when either
    // of these two properties change
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		// setEnteredEmail(event.target.value);
		dispatchEmail({ type: "INPUT", payload: event.target.value });

		// setFormIsValid(
		// 	emailState.value.includes("@") && passwordState.value.trim().length > 6
		// );
	};

	const passwordChangeHandler = (event) => {
		// setEnteredPassword(event.target.value);
		dispatchPassword({ type: "INPUT", payload: event.target.value });
		// setFormIsValid(
		// 	emailState.value.includes("@") && event.target.value.trim().length > 6
		// );
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
		// setEmailIsValid(enteredEmail.includes("@"));
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
		// setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
