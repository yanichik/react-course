import { useRef, useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
	// const [username, setUsername] = useState("");
	// const [age, setAge] = useState("");
	const usernameRef = useRef();
	const ageRef = useRef();
	const [error, setError] = useState();

	function addUserHandler(e) {
		e.preventDefault();
		console.log(ageRef);
		if (usernameRef.current.value.trim().length === 0 || ageRef.current.value.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Must enter username and age.",
			});
		}
		// "+" turns string number into number
		else if (+ageRef.current.value < 1) {
			setError({ title: "Invalid Age", message: "Must enter age > 0" });
		} else {
			props.onAddUser(usernameRef.current.value, ageRef.current.value);
			// console.log("username: " + username);
			// console.log("age: " + age);
			// setUsername("");
			// setAge("");

      // usually not a good idea to manipulate DOM with refs, but here just to reset input and 
      // acceptable
      usernameRef.current.value = '';
      ageRef.current.value = '';
		}
	}
	// function userHandler(e) {
	// 	setUsername(e.target.value);
	// }
	// function ageHandler(e) {
	// 	setAge(e.target.value);
	// }
	function onErrorHandler() {
		setError(null);
	}
	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={onErrorHandler}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						// value={usernameRef.current.value}
						// onChange={userHandler}
						ref={usernameRef}
					/>
					<label htmlFor="age">Age (years):</label>
					<input
						type="number"
						id="age"
						// value={ageRef.current.value}
						// onChange={ageHandler}
						ref={ageRef}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
}

export default AddUser;
