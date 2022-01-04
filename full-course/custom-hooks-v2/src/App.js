import React, { useEffect, useMemo, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./custom-hooks/useHttp";

function App() {
	// manage tasks state here at top level
	const [tasks, setTasks] = useState([]);

	const myUrl = useMemo(() => {
		return {
			url: "https://react-http-104c4-default-rtdb.firebaseio.com/tasks.json",
		};
	}, []);

	const { isLoading, error, sendRequest: fetchTasks } = useHttp();

	useEffect(() => {
		// func transforms loaded data to add id (firebase-generated), push to loadedTasks, then
		// push to tasks state
		const transformTasks = (taskObj) => {
			let loadedTasks = [];
			for (const taskKey in taskObj) {
				loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
			}
			setTasks(loadedTasks);
		};
		fetchTasks(myUrl, transformTasks);
		// if you add fetchTasks as a dependency this will trigger a re-render each time states
		// are set inside sendRequest (ie fetchTasks) and with each render the custom hook (useHttp)
		// will be recalled to continue the cycle. to avoid this, wrap sendRequest with useCallback
	}, [fetchTasks, myUrl]);

	const addTaskHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};
	return (
		<React.Fragment>
			<NewTask onEnterTask={addTaskHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks}
			/>
		</React.Fragment>
	);
}

export default App;
