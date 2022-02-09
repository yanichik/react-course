import React, { useState } from "react";

// default context format. here don't really need to
// define the shape but doing it ONLY for better auto-completion
// inside VS. the actual default/initialization occurs below
// inside 'defaultContextValue'
export const AuthContext = React.createContext({
	token: "",
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

const AuthProvider = (props) => {
	const initialToken = localStorage.getItem("token");
	const [token, setToken] = useState(initialToken);
	const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
	const loginHandler = (myToken) => {
		console.log("login handler");
		setToken(myToken);
		localStorage.setItem("token", myToken);
		setIsLoggedIn(true);
	};
	const logoutHandler = () => {
		setToken(null);
		localStorage.removeItem("token");
		setIsLoggedIn(false);
	};
	const defaultContextValue = {
		token: token,
		isLoggedIn: isLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};
	return (
		<AuthContext.Provider value={defaultContextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
