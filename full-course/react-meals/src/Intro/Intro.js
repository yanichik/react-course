import classes from "./Intro.module.css";
export const Intro = (props) => {
	return (
		<div className={classes.bg_img}>
			<div className={classes.intro_heading}>
				<h1>Delicious Food, Delivered to You</h1>
				<p>
					Choose your favorite meal from our broad selection of meals and enjoy
					a delicious lunch or dinner at home
				</p>
				<p>
					All our meals are cooked with high-quality ingredients, just-in-time
					and of course by experienced chefs!
				</p>
			</div>
		</div>
	);
};
