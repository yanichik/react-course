import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard({ user }) {
  const val = useContext(UserContext);
	return (
		<div>
			<h3>Users: {val[1].name}</h3>
		</div>
	);
}

export default Dashboard;
