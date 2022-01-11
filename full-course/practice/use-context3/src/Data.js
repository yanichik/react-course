import { useContext, useRef } from "react";
import SomeContext from "./Context/use-context";
function Data() {
	const dataRef = useRef();
	const arrayRef = useRef();
	const myCtx = useContext(SomeContext);

	const dataPointHandler = () => {
		myCtx.funct1(dataRef.current.value);
	};

	const arrayHandler = () => {
		myCtx.funct2(arrayRef.current.value);
	};

	return (
		<div>
			<div>Data point: {myCtx.dataPoint}</div>
			<input ref={dataRef} />
			<button onClick={dataPointHandler}>Set Data Point</button>
			<div>Array or Object: {myCtx.array}</div>
			<input ref={arrayRef} />
			<button onClick={arrayHandler}>Print Array</button>
		</div>
	);
}

export default Data;
