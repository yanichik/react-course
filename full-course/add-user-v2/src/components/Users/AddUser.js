import { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState();

	function addUserHandler(e) {
		e.preventDefault();
		console.log(age);
		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Must enter username and age.",
			});
		}
		// "+" turns string number into number
		else if (+age < 1) {
			setError({ title: "Invalid Age", message: "Must enter age > 0" });
		} else {
			props.onAddUser(username, age);
			// console.log("username: " + username);
			// console.log("age: " + age);
			setUsername("");
			setAge("");
		}
	}
	function userHandler(e) {
		setUsername(e.target.value);
	}
	function ageHandler(e) {
		setAge(e.target.value);
	}
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
						value={username}
						onChange={userHandler}
					/>
					<label htmlFor="age">Age (years):</label>
					<input type="number" id="age" value={age} onChange={ageHandler} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
}

export default AddUser;
