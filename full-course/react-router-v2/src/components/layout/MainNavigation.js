import { Link, Route, Redirect, Switch } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
	return (
		<div>
			<header className={classes.header}>
				<h1 className={classes.logo}>Great Quotes</h1>
				<nav className={classes.nav}>
					<ul>
						<li>
							<Link to="/quotes">All Quotes</Link>
						</li>
						<li>
							<Link to="/add-quote">Add a Quote</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};
export default MainNavigation;
