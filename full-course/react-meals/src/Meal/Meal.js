import { meals } from "../MealItems/MealItems";
import { useState } from "react";

export const Meal = (props) => {
	let initMealCounts = meals.map((item) => 0);
	// console.log(initMealCounts);
	const [count, setCount] = useState(initMealCounts);
	// console.log(count);

	function addOne() {
		setCount((prevCount) => {
			return parseFloat(prevCount) + 1;
		});
	}
	return (
		<div style={{ marginTop: "150px" }}>
			{meals.map((item, i) => {
				{
					console.log(item, count[i]);
				}
				return (
					<div key={Math.random()}>
						<p>{item.name}</p>
						<p>{item.description}</p>
						<p style={{ marginTop: "0px", marginBottom: "35px" }}>
							${item.price}
						</p>
						<div>
							<label htmlFor={item.name}>Amount</label>
							<input
								id={item.name}
								name={item.name}
								type="number"
								value={count[i]}
								onChange={(e) => console.log(count[i], e.target.value)}
							/>
							<button onClick={addOne}>+Add</button>
						</div>
						<hr></hr>
					</div>
				);
			})}
		</div>
	);
};

// export const Meal = (props) => {
// 	const sushiRef = useRef(0);
// 	const SchnitzelRef = useRef(0);

// 	function addOne() {
// 		return;
// 	}
// 	return (
// 		<div style={{ marginTop: "150px" }}>
// 			{meals.map((item) => {
// 				return (
// 					<div>
// 						<p>{item.name}</p>
// 						<p>{item.description}</p>
// 						<p style={{ marginTop: "0px", marginBottom: "35px" }}>
// 							${item.price}
// 						</p>
// 						<div>
// 							<label htmlFor={item.name}>Amount</label>
// 							<input id={item.name} name={item.name} type="number" />
// 							<button onClick={addOne}>+Add</button>
// 						</div>
// 						<hr></hr>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };
