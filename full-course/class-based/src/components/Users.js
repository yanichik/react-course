// import { useState } from "react";
import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
// 	{ id: "u1", name: "Max" },
// 	{ id: "u2", name: "Manuel" },
// 	{ id: "u3", name: "Julie" },
// ];

class Users extends Component {
	constructor() {
		super();
		this.state = {
			showUsers: true,
		};
	}
	componentDidUpdate() {
		// console.log("updating");
		// console.log("length: " + this.props.users.length);
		if (this.props.users.length === 0) {
			throw new Error("No users found");
		}
	}
	// "toggleUsersHandler" is a method of "Users" class
	// don't need "function" nor "const" before declaring
	toggleUsersHandler() {
		// console.log(this);
		this.setState((curState) => {
			// MUST return an object to change state, just like when declaring state
			return { showUsers: !curState.showUsers };
		});
	}
	render() {
		const usersList = (
			<ul>
				{/* {DUMMY_USERS.map((user) => ( */}
				{this.props.users.map((user) => (
					<User key={user.id} name={user.name} />
				))}
			</ul>
		);
		return (
			<div className={classes.users}>
				{/* note that instead of passing a pointer to "toggleUsersHandler" you need
        to actually pass a function call.
        Also, do not need to use bind here BECAUSE using arrow function on line 21,
        which already binds the function to the Users instance. */}
				{/* {console.log(this)} */}
				<button onClick={this.toggleUsersHandler.bind(this)}>
					{/* <button onClick={this.toggleUsersHandler}> */}
					{this.showUsers ? "Hide" : "Show"} Users
				</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

// const Users = () => {
// 	const [showUsers, setShowUsers] = useState(true);

// 	const toggleUsersHandler = () => {
// 		setShowUsers((curState) => !curState);
// 	};

// const usersList = (
// 	<ul>
// 		{DUMMY_USERS.map((user) => (
// 			<User key={user.id} name={user.name} />
// 		))}
// 	</ul>
// );

// 	return (
// 		<div className={classes.users}>
// 			<button onClick={toggleUsersHandler}>
// 				{showUsers ? "Hide" : "Show"} Users
// 			</button>
// 			{showUsers && usersList}
// 		</div>
// 	);
// };

export default Users;
