import React from "react";
import ReactDOM from "react-dom";
// react-redux provies Provider which allows us to distribute
// the state throughout the application. we wrap the Provider
// around the root App. NOTE: react-redux ALSO provides the
// "connect" function to allow access to the state directly
// from any component in the App
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import myStore from "./store";
window.store = myStore;



ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
