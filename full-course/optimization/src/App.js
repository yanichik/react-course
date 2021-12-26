import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
	const [listTitle, setListTitle] = useState("My List");

	// const changeTitleHandler = () => {
	// 	setListTitle("New Title");
	// };
	const changeTitleHandler = useCallback(() => {
	  setListTitle('New Title');
	}, []);

	const listItems = [5, 3, 1, 10, 9];
	// const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

	return (
		<div className="app">
			<DemoList title={listTitle} items={listItems} />
			<Button onClick={changeTitleHandler}>Change List Title</Button>
		</div>
	);
}

export default App;
