import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Cart from "../Cart/Cart";
import { useEffect, useCallback } from "react";

const mealsArray = [
	{
		id: 1,
		name: "Sushi",
		description: "Finest fish and veggies",
		price: "22.99",
	},
	{
		id: 2,
		name: "Schnitzel",
		description: "A German specialty!",
		price: "16.50",
	},
	{
		id: 3,
		name: "BBQ Burger",
		description: "American, raw, meaty",
		price: "12.99",
	},
	{
		id: 4,
		name: "Green bowl",
		description: "Healthy ... and green ...",
		price: "18.99",
	},
];

function AvailableMeals(props) {
	const fetchMenu = useCallback(async () => {
		try {
			const menu = await fetch(
				"https://react-http-104c4-default-rtdb.firebaseio.com/menu.json"
			);
			console.log(menu.json());
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		fetchMenu();
	}, [fetchMenu]);

	const meals = mealsArray.map((meal) => (
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
