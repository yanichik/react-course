import styles from "./MealsSummary.module.css";
function MealsSummary() {
	return (
		<section className={styles["meals-summary"]}>
			<h1>Delicious Food, Delivered to You!</h1>
			<div>
				<p>
					Choose your favorite meal from our selection of meals and enjoy a
					delicious lunch or dinner at home
				</p>
				<p>
					All our meals are cooked with high quality ingredients, just in time
					and of course by experienced chefs
				</p>
			</div>
		</section>
	);
}
export default MealsSummary;
