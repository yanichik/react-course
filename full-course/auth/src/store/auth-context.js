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
	const [token, setToken] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loginHandler = (myToken) => {
		console.log("login handler");
		setToken(myToken);
		setIsLoggedIn(true);
	};
	const logoutHandler = () => {
		setToken(null);
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
