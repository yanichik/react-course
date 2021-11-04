import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./Theme.css";

function Theme(props) {
	function onSwitchTheme() {
		return props.onSwitchTheme();
	}
	const ctx = useContext(ThemeContext);
	return (
		<>
			{ctx.darkTheme && (
				<div className="dark">
					Dark<p></p>
					<button onClick={onSwitchTheme}>Switch Themes</button>
				</div>
			)}
			{!ctx.darkTheme && (
				<div className="light">
					Light<p></p>
					<button onClick={onSwitchTheme}>Switch Themes</button>
				</div>
			)}
		</>
	);
}

export default Theme;
