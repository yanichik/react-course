import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import { AuthContext } from "../../store/auth-context";

const ProfileForm = () => {
	const authCtx = useContext(AuthContext);
	const newPasswordRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();
		const enteredPassword = newPasswordRef.current.value;
		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAg7hKEJZQz6TCgVGOqbcLcmnZOwLBsyuc",
			{
				method: "POST",
				body: JSON.stringify({
					idToken: authCtx.token,
					password: enteredPassword,
					returnSecureToken: false,
				}),
				headers: { "Content-type": "application/json" },
			}
		).then((res) => {});
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input type="password" id="new-password" ref={newPasswordRef} />
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
