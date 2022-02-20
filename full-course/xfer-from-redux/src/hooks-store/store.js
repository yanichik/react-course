// importing useState inside this custom hook b/c useState has
// internal mechanism to refresh/re-render upon any changes,
// and we want this custom hook (useStore) to inherit these
// re-rendering properties
import { useEffect, useState } from "react";

// b/c globalState is created outside of the custom hook, it WILL NOT
// refresh at each change, instead it will ONLY be created ONCE when this
// runs the first time. Therefore, it does not need to be wrapped in a
// useCallback to prevent re-creations when no changes are made to it, b/c
// it lives outside of the useStore custom hook
let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
	const setState = useState(globalState)[1];

	useEffect(() => {
		listeners.push(setState);
		console.log(listeners);
		return () => {
			listeners = listeners.filter((li) => li !== setState);
		};
	}, [setState]);
};

export default useStore;
