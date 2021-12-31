import useCounter from "./custom-hooks/useCounter";

import Card from "./Card";

const ForwardCounter = () => {
	const counter = useCounter();
	return <Card>{counter}</Card>;
};

export default ForwardCounter;
