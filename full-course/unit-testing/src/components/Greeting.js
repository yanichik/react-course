import { useState } from "react";

const Greeting = () => {
	const [changedText, setChangedText] = useState(false);
	const changeTextHandler = () => {
		setChangedText(true);
	};
	return (
		<div>
			<p>Hello mate!</p>
			<button onClick={changeTextHandler}>Change Text</button>
			{!changedText && <p>It's good to see you!</p>}
			{changedText && <p>Changed!</p>}
		</div>
	);
};
export default Greeting;
