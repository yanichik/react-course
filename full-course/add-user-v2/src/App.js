import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UsersList from "./components/Users/UsersList";
function App() {
	const [usersList, setUsersList] = useState([]);
	function addUserHandler(uName, uAge) {
		setUsersList((prevUsersList) => {
			return [...prevUsersList, {id: Math.random(), username: uName, age: uAge }];
		});
	}
	return (
    // <> </> is a React.Fragment component aka empty wrapper to avoid
    // inserting an extra empty div that adds to div Soup
		<>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</>
	);
}

export default App;
