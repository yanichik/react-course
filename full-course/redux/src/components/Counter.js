import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const toggle = useSelector((state) => state.toggle);

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};
	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};
	const increaseHandler = () => {
		dispatch(counterActions.increase(10));
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{toggle && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increment 10</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
