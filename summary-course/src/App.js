import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups.js";
import FavoritesPage from "./pages/Favorites.js";
import NewMeetupPage from "./pages/NewMeetup.js";
import Layout from "./components/layout/Layout.js";
function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllMeetupsPage />
				</Route>
				<Route path="/favorites">
					<FavoritesPage />
				</Route>
				<Route path="/new-meetup">
					<NewMeetupPage />
				</Route>
			</Switch>
		</Layout>
	);
}
export default App;
