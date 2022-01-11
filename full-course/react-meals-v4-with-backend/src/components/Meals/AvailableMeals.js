import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [httpError, setHttpError] = useState(null);
	useEffect(() => {
		const fetchMenu = async () => {
			setIsLoading(true);
			const rsvp = await fetch(
				"https://react-http-104c4-default-rtdb.firebaseio.com/maxMenu.json"
			);
			if (!rsvp.ok) {
				throw new Error(rsvp.status + " " + rsvp.statusText);
			} else {}
			const formattedData = await rsvp.json();
			let dummy_meals = [];
			for (const key in formattedData) {
				dummy_meals.push({
					id: key,
					name: formattedData[key].name,
					description: formattedData[key].description,
					price: formattedData[key].price,
				});
			}
			setMeals(dummy_meals);
			setIsLoading(false);
		};

		fetchMenu().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				{httpError && <p>{httpError}</p>}
				{isLoading && !httpError && <p>Loading ...</p>}
				{!isLoading && !httpError && <ul>{mealsList}</ul>}
			</Card>
		</section>
	);
};

export default AvailableMeals;
