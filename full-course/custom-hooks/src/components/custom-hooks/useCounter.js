import { useState, useEffect } from "react";

function useCounter(counterType = true) {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (counterType) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);
		console.log(interval);
		return () => clearInterval(interval);
	}, [counterType]);
	return counter;
}

export default useCounter;
