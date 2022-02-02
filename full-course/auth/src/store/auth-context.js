import React, { useState } from "react";

// default context format
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
