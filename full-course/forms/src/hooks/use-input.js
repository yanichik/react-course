import { useState } from "react";

// pass in validateVal function instead of defining inside the useInput hook
// BECAUSE this allows to generalize the validity function
const useInput = (validateVal) => {
	const [input1, setInput1] = useState("");
	const [touchedInput1, setTouchedInput1] = useState(false);

	const input1Valid = validateVal(input1);
	const input1HasError = !input1Valid && touchedInput1;

	const input1ChangeHandler = (event) => {
		setInput1(event.target.value);
	};

	const input1BlurHandler = () => {
		setTouchedInput1(true);
	};

	const resetInput1 = () => {
		setInput1("");
		setTouchedInput1(false);
	};

	return {
		value: input1,
		isTouched: touchedInput1,
		isValid: input1Valid,
		changeHandler: input1ChangeHandler,
		hasError: input1HasError,
		reset: resetInput1,
		blurHandler: input1BlurHandler,
	};
};
export default useInput;
