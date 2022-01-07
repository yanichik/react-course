import { useReducer } from "react";

const initialInput1State = {
	value: "",
	isTouched: false,
};

const input1Reducer = (state, action) => {
	if (action.type === "INPUT") {
		// MUST return all values within state object, otherwise changing object params
		return { value: action.value, isTouched: state.isTouched };
	}
	if (action.type === "BLUR") {
		return { value: state.value, isTouched: true };
	}
	if (action.type === "RESET") {
		return { value: "", isTouched: false };
	}
	return initialInput1State;
};

// pass in validateVal function instead of defining inside the useInput hook
// BECAUSE this allows to generalize the validity function
const useInput = (validateVal) => {
	// initializes reduer according the the initial input state (initialInput1State)
	// & reducer logic (input1Reducer function).
	const [input1State, dispatch] = useReducer(input1Reducer, initialInput1State);

	const input1Valid = validateVal(input1State.value);
	const input1HasError = !input1Valid && input1State.isTouched;

	const input1ChangeHandler = (event) => {
		dispatch({ type: "INPUT", value: event.target.value });
		// setInput1(event.target.value);
	};

	const input1BlurHandler = () => {
		dispatch({ type: "BLUR" });
		// setTouchedInput1(true);
	};

	const resetInput1 = () => {
		dispatch({ type: "RESET" });
	};

	return {
		value: input1State.value,
		isTouched: input1State.isTouched,
		isValid: input1Valid,
		changeHandler: input1ChangeHandler,
		hasError: input1HasError,
		reset: resetInput1,
		blurHandler: input1BlurHandler,
	};
};
export default useInput;
