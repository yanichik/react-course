import { useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};
	const authCtx = useContext(AuthContext);
	const history = useHistory();
	// console.log(authCtx.token);

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		setIsLoading(true);
		let url;
		if (isLogin) {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAg7hKEJZQz6TCgVGOqbcLcmnZOwLBsyuc";
		} else {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAg7hKEJZQz6TCgVGOqbcLcmnZOwLBsyuc";
		}
		// fetch returns promise - using then to catch result
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			}),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((res) => {
				setIsLoading(false);
				if (res.ok) {
					res.json().then((data) => {
						// console.log(
						// 	+data.expiresIn + " is of type: " + typeof +data.expiresIn
						// );
						const expirationTime = new Date(
							new Date().getTime() + +data.expiresIn * 1000
							// new Date().getTime() + 3 * 1000
						);
						// in login, expecting a time stamp to set the experation time
						authCtx.login(data.idToken, expirationTime);
						history.replace("/");
					});
					// console.log("logging in");
				} else {
					// can throw error as option
					// res.json() return promise. using then to catch the data
					return res.json().then((data) => {
						let errorMsg = "Auth Failed!";
						// if (data && data.error && data.error.message) {
						// 	errorMsg = data.error.message;
						// }
						// alert(errorMsg);
						throw new Error(errorMsg);
					});
				}
			})
			.catch((err) => {
				// console.log(err);
			});
	};
	// console.log("isLoggedIn: " + authCtx.isLoggedIn);
	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input type="email" id="email" required ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						required
						ref={passwordInputRef}
					/>
				</div>
				<div className={classes.actions}>
					<button>{isLogin ? "Login" : "Create Account"}</button>
					{!isLoading && (
						<button
							type="button"
							className={classes.toggle}
							onClick={switchAuthModeHandler}
						>
							{isLogin ? "Create new account" : "Login with existing account"}
						</button>
					)}
					{isLoading && <p>Loading ...</p>}
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
