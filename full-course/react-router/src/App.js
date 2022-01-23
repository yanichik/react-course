import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
function App() {
	return (
		<div>
      {/* dont' need Route for MainHeader b/c want it to ALWAYS show up */}
			<MainHeader />
			<main>
				<Switch>
					<Route path="/welcome">
						<Welcome />
					</Route>
					<Route path="/" exact>
						<Redirect to='/welcome' />
					</Route>
					<Route path="/products" exact>
						<Products />
					</Route>
					<Route path="/products/:productId" exact>
						<ProductDetail />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
