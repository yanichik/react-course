import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
function Meals(props) {
	return (
		<>
			<MealsSummary />
			<AvailableMeals showCartStatus={props.showCartStatus} onCloseCart={props.onCloseCart}/>
		</>
	);
}

export default Meals;
