import { useState } from "react";
import Form from "./Form/Form";
import DisplayUsers from "./Item/DisplayUsers";
import "./App.css";
import Modal from "./UI/Modal";
import Card from "./UI/Card";

function App() {
	const [modal, setModal] = useState(false);
	const [users, setUsers] = useState([]);
	const [modalMsg, setModalMsg] = useState("");

	function submitFormHandler(user) {
		if (user.username.length === 0 || user.age.length === 0) {
			setModal(true);
			setModalMsg("Please enter a valid name and age (non-empty values).");
		} else if (parseInt(user.age, 10) < 0) {
			setModal(true);
			setModalMsg("Please enter a valid age (>0).");
		} else {
			setUsers((prevUsers) => [user, ...prevUsers]);
		}
	}

	return (
		<div className="App">
			<div className="form">
				<Card>
					<Form onSubmit={submitFormHandler} />
				</Card>
			</div>
			<div>
				<Card>
					<DisplayUsers users={users} />
				</Card>
			</div>
			{/* setModal is passed in a parameter from Modal component. You cannot have it here like this "setModal={setModal(false)}" b/c 
			it will Immediatel set the modal to false once the modal is set to true. The logic allows Modal component to show ONLY upon model=true
			and the above setting would turn it back to false, so we'd never see it. */}
			{modal ? <Modal setModal={setModal} modalMsg={modalMsg} /> : null}
		</div>
	);
}

export default App;
