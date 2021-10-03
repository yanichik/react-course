import styles from "./Form.module.css";

function Form(props) {
	function submitHandler(e) {
		e.preventDefault();
		let username = e.target[0].value;
		let age = e.target[1].value;
		e.target[0].value = e.target[1].value = '';
		props.onSubmit({ username, age, key: age });
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label>
						Username:
						<input type="text" name="username" placeholder=''/>
					</label>
				</div>
				<div>
					<label htmlFor="">
						Age (Years):
						<input type="number" name="age" placeholder=''/>
					</label>
				</div>
				<button type="submit">Add User</button>
			</form>
		</div>
	);
}

export default Form;
