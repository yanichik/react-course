import Todo from "./components/Todo";
function App(props) {
	function remove(txt) {
		console.log("Removing");
		console.log(txt);
	}
	return (
		<div>
			<h1>My TODOS</h1>
			<Todo text="First" removeItem={remove} />
			<Todo text="Second" removeItem={remove} />
			<Todo text="Third" removeItem={remove} />
		</div>
	);
}
export default App;
