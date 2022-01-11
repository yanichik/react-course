import Data from "./Data.js";
import SomeProvider from "./Context/SomeProvider";
function App() {
	return (
		<SomeProvider>
			<Data></Data>
		</SomeProvider>
	);
}

export default App;
