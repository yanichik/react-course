import { createContext } from "react";

const SomeContext = createContext({
	dataPoint: null,
	array: [],
	funct1: (item) => {},
	funct2: () => {},
});

export default SomeContext;
