import { useState, useCallback } from "react";

// NOTE that useCallback CANNOT be used on the top level function
function useHttp() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (httpConfig, applyFunction) => {
		setIsLoading(true);
		setError(false);
		try {
			const response = await fetch(httpConfig.url, {
				method: httpConfig.method ? httpConfig.method : "GET",
				headers: httpConfig.headers ? httpConfig.headers : {},
				body: httpConfig.body ? JSON.stringify(httpConfig.body) : null,
			});
			// console.log("response: " + response.method);

			if (!response.ok) {
				throw new Error("Request failed!");
			}

			const data = await response.json();
			
			applyFunction(data);
			// console.log("the formatted task is:" + applyFunction(data));
		} catch (err) {
			setError(err.message || "Something went wrong!");
		}
		setIsLoading(false);
	}, []);
	return { sendRequest, isLoading, error };
}

export default useHttp;
