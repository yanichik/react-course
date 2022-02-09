import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./store/auth-context";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
	const authCtx = useContext(AuthContext);
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					{authCtx.isLoggedIn ? (
						<HomePage />
					) : (
						<p>Need to login to access this page.</p>
					)}
				</Route>
				<Route path="/auth">
					<AuthPage />
				</Route>
				<Route path="/profile">
					{authCtx.isLoggedIn ? (
						<UserProfile />
					) : (
						<p>Need to login to access this page.</p>
					)}
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
