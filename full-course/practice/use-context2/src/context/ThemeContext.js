import React, { useState } from "react";

export const ThemeContext = React.createContext({
	darkTheme: true,
	onSwitchTheme: () => {},
});

export const ThemeContextProvider = (props) => {
	const [darkTheme, setDarkTheme] = useState(true);
	function switchThemeHandler() {
		setDarkTheme((prevTheme) => {
			return !prevTheme;
		});
	}
	return (
		<ThemeContext.Provider
			value={{ onSwitchTheme: switchThemeHandler, darkTheme: darkTheme }}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};
