import React, { useEffect, useState, useCallback } from "react";

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

const retrievedStoredToken = () => {
	const storedToken = localStorage.getItem("token");
	const storedExperationTime = localStorage.getItem("expirationTime");
	// console.log(storedExperationTime);
	const remainingTime = calculateRemainingTime(storedExperationTime);

	// console.log("remainingTime is type of:" + typeof remainingTime);
	// console.log("remainingTime is: " + remainingTime);
	if (remainingTime <= 3000) {
		// console.log("inside if statement");
		localStorage.removeItem("experationTime");
		return null;
	}
	return {
		token: storedToken,
		duration: remainingTime,
	};
};

let logoutTimer;
const calculateRemainingTime = (expirationTime) => {
	// need to return in ms
	// expecting experationTime to be string
	const currentTime = new Date().getTime();
	// console.log(currentTime);
	// adjExperationTime in ms & represents some time in future in ms
	const adjExpirationTime = new Date(expirationTime).getTime();
	// console.log(adjExpirationTime);
	// if remainingTime is negative it means the experationTime has already past, but can
	// handle this event if need. here just assuming it's in the future, so it'll be positive
	const remainingTime = adjExpirationTime - currentTime;
	// console.log(remainingTime);
	return remainingTime;
};
const AuthProvider = (props) => {
	const tokenData = retrievedStoredToken();
	let initialToken;
	if (tokenData) {
		initialToken = tokenData.token;
	}
	const [token, setToken] = useState(initialToken);
	const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
	const loginHandler = (myToken, expirationTime) => {
		// console.log("myToken: " + myToken);
		setToken(myToken);
		localStorage.setItem("token", myToken);
		localStorage.setItem("expirationTime", expirationTime);
		setIsLoggedIn(true);
		const remainingTime = calculateRemainingTime(expirationTime);
		// console.log(remainingTime);
		// setting this time in order to be able to clear timer in case use logs out
		logoutTimer = setTimeout(logoutHandler, remainingTime);
	};
	const logoutHandler = useCallback(() => {
		// console.log("inside logout");
		setToken(null);
		localStorage.removeItem("token");
		localStorage.removeItem("expirationTime");
		setIsLoggedIn(false);
		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	}, []);
	useEffect(() => {
		if (tokenData) {
			// console.log(tokenData.duration);
			logoutTimer = setTimeout(logoutHandler, tokenData.duration);
		}
	}, [tokenData, logoutHandler]);

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
