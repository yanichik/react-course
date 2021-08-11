import Dashboard from "./Dashboard";
import { useState, useContext } from "react";
import { UserProvider } from "./UserContext";
function App() {
	const [user, setUser] = useState({ name: "Johnny" });
	return (
		<UserProvider>
			<div>
				<h2>Let's get started!</h2>
				<Dashboard user={user} />
			</div>
		</UserProvider>
	);
}

export default App;
