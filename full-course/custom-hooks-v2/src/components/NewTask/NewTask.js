// import { useState } from "react";
import useHttp from "../../custom-hooks/useHttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
	const { isLoading, error, sendRequest: createTask } = useHttp();

	const enterTaskHandler = async (taskText) => {
		const requestConfig = {
			url: "https://react-http-104c4-default-rtdb.firebaseio.com/tasks.json",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: { text: taskText },
		};
		const formatTask = (taskObj) => {
			const generatedId = taskObj.name; // firebase-specific => "name" contains generated id
			// createdTask is object containing firebase-generated id and the task text that was passed
			// in from the TaskForm file
			const createdTask = { id: generatedId, text: taskText };
			props.onEnterTask(createdTask);
		};
		createTask(requestConfig, formatTask);
	};

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} isLoading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
