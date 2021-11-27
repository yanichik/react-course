import classes from "./Header.module.css";
export const Header = (props) => {
	return (
		<div className={classes.Header}>
			<div className={classes.headerContent}>
				<h2>ReactMeals</h2>
				<p>Your Cart 0</p>
			</div>
		</div>
	);
};
