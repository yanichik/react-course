import { useReducer, useEffect } from "react";
import axios from "axios";

function reducer(state, action) {
	console.log("start of state:", state);
	if (action.type === "stopGetArticle") {
		state = { ...state, loading: false, data: null, error: null };
	} else if (action.type === "getArticleStart") {
		state = { ...state, loading: true };
	} else if (action.type === "getArticleSuccess") {
		console.log("pre-timeout state", state);
		setTimeout(() => {
			state = { ...state, loading: false, data: action.payload };
			console.log("post-timeout state", state);
		}, 3000);
	} else if (action.type === "getArticleFail") {
		state = { ...state, loading: false };
	}
	console.log("end of state:", state);
	return state;
}

const initialState = {
	loading: false,
	error: null,
	data: null,
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		axios
			.get("http://localhost:3004/posts/1")
			.then((res) => {
				console.log("res", res);
				dispatch({ type: "getArticleSuccess", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "getArticleFail" });
			});
	}, [state.loading]);

	return (
		<div className="App">
			<div>
				<button
					onClick={() => {
						dispatch({ type: "getArticleStart" });
					}}
				>
					Load
				</button>
				<button
					onClick={() => {
						dispatch({ type: "stopGetArticle" });
					}}
				>
					UnLoad
				</button>
			</div>
			{state.loading && <div>Loading ...</div>}
			{state.data && <div>{state.data.title}</div>}
		</div>
	);
}

export default App;
