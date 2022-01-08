import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Cart from "../Cart/Cart";
import { useEffect, useCallback, useState } from "react";

function AvailableMeals(props) {
	const [finalMenu, setFinalMenu] = useState([]);
	const fetchMenu = useCallback(async () => {
		try {
			const rsvp = await fetch(
				"https://react-http-104c4-default-rtdb.firebaseio.com/menu.json"
			);
			// cannot call on the same promise twice. the 2nd call will respond with "body has already been consumed"
			// console.log(await rsvp.json());
			const menu = await rsvp.json();
			// console.log(menu);
			let mealsArray = [];
			for (const item in menu) {
				mealsArray.push({
					id: menu[item].id,
					name: item,
					description: menu[item].description,
					price: menu[item].price,
				});
			}
			// console.log(mealsArray);
			setFinalMenu(mealsArray);
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		fetchMenu();
	}, [fetchMenu]);

	const meals = finalMenu.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={+meal.price}
		/>
	));
	return (
		<>
			{props.showCartStatus && <Cart onCloseCart={props.onCloseCart} />}
			<section className={styles.meals}>
				<Card>
					<ul>{meals}</ul>
				</Card>
			</section>
		</>
	);
}

export default AvailableMeals;
