import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";
import { useRef } from "react";

const Auth = () => {
	const dispatch = useDispatch();
	const emailRef = useRef();
	const pwRef = useRef();

	const loginHandler = (event) => {
		event.preventDefault();
		dispatch(authActions.login());
		emailRef.current.value = "";
		pwRef.current.value = "";
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={loginHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" ref={emailRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" ref={pwRef} />
					</div>
					<button>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
