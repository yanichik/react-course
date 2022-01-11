import SomeContext from "./use-context";
import { useState, useReducer } from "react";

const someReducer = (state, action) => {
	if ("PRINT ARRAY") {
		console.log("Array: " + action.array);
		return {
			dataPoint: state.dataPoint,
			array: action.array,
		};
	}
};

const SomeProvider = (props) => {
	const [someState, someAction] = useReducer(someReducer, {
		dataPoint: null,
		array: [],
	});

	const [dataPoint, setDataPoint] = useState();

	const setDataPointHandler = (param) => {
		setDataPoint(param);
		console.log("New Data Point is: " + param);
	};

	const printArrayHandler = (arr) => {
		someAction({ type: "PRINT ARRAY", array: arr });
	};

	const theContext = {
		dataPoint: dataPoint,
		array: someState.array,
		funct1: setDataPointHandler,
		funct2: printArrayHandler,
	};
	return (
		<SomeContext.Provider value={theContext}>
			{props.children}
		</SomeContext.Provider>
	);
};

export default SomeProvider;
