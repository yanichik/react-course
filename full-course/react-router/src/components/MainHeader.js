import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
function MainHeader() {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						{/* NavLink & Link are similarly replacements for <a></a>, but NavLink adds active link styling
						that allows you to control active links with the "activeClassName" class. Link & NavLink both 
						DO NOT issue a page refresh, whereas anchor tag does, so Link/NavLink have a preventDefault
						behind */}
						<NavLink activeClassName={classes.active} to="/welcome">
							Welcome
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/products">
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainHeader;
