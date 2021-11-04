import React, { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Theme from "./Theme";

function App() {
	const [darkTheme, setDarkTheme] = useState(true);
	function switchThemeHandler() {
		setDarkTheme((prevTheme) => {
			return !prevTheme;
		});
	}
	return (
		<ThemeContext.Provider value={{ darkTheme: darkTheme, onSwitchTheme: switchThemeHandler}}>
			<Theme></Theme>
		</ThemeContext.Provider>
	);
}

export default App;
