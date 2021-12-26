import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "./components/AddMovie";
// import { useState }, React from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading((prevStatus) => !prevStatus);
		try {
			// Fetch default method is GET so do not need another argument. fetch returns promise
			// which needs to be asynchronous code by using async-await, OR "then" call.
			// When using async-await, need to use try-catch to handle errors.
			// NOTE that fetch API DOES NOT treat error status codes as real errors & it WILL NOT
			// throw a technical error if get back an error status code. You will only receive a
			// technical error when you try to do something with that data - in this case the
			// first action is the "await rsvp.json()" would be the first action on the received data.
			// Therefore, it's best practice to check data validity and throw a status error if data is invalid.
			//
			// const rsvp = await fetch("https://swapi.dev/api/films");
			const rsvp = await fetch(
				"https://react-http-104c4-default-rtdb.firebaseio.com/movies.json"
			);
			// checking if response is "ok" and throw error if data rsvp NOT OK
			if (!rsvp.ok) {
				throw new Error("Something Went Wrong!");
			}
			const data = await rsvp.json();
			const loadedMovies = [];
			for (const key in data) {
				loadedMovies.push({
					id: key,
					title: data[key].title,
					openingText: data[key].openingText,
					releaseDate: data[key].releaseDate,
				});
			}

			// const transformedMovies = data.results.map((movie) => {
			// 	return {
			// 		id: movie.episode_id,
			// 		title: movie.title,
			// 		openingText: movie.opening_crawl,
			// 		releaseDate: movie.release_date,
			// 	};
			// });
			// setMovies(transformedMovies);
			setMovies(loadedMovies);
			setIsLoading((prevStatus) => !prevStatus);
		} catch (error) {
			setError(error.message);
		}
		// Dependencies:
		// State functions DO NOT need to be added b/c React guarantees that they will never change.
		// Besides that this function has NO external dependencies
	}, []);

	// If you leave the dependencies blank, it will load only once upon first load of app.
	// BUT the standard and best practice is to put all variables and functions that appear
	// inside of the useEffect as dependencies of the useEffect. In this case, there is the
	// function "fetchMoviesHandler", which does not actually change in this app, BUT if we
	// were to have an external state which could change the insides of the function, we would
	// want to add "fetchMoviesHandler" function as a dependency. NOW due to the fact that
	// technically each time the app refreshes the function sits in a different memory location,
	// we need to use the useCallback hook to 'remember' the function between refreshes. To use the
	// hook, we need to convert the "fetchMoviesHandler" function definition from using the
	// "function" keyword to the "const" keyword. Due to the way hoisting works for functions vs const,
	// we need to place the useEffect (which calls "fetchMoviesHandler") AFTER the definition of the
	// function.
	useEffect(() => {
		fetchMoviesHandler();
		// By listing 'fetchMoviesHandler' as a dependency, this side effect will run whenever
		// 'fetchMovieshandler' changes AND b/c functions are technically objects in JS, it will change
		// each time it is re-run b/c it will point to new location. This will create infinite loop. Thus, you
		// can ommit it from the dependcies list, which is ok in this specific case. BUT if there were some
		// external states that could alter 'fetchMoviesHandler' you would need to keep it as a dependency.
		// In that case, need to wrap 'fetchMoviesHandler' inside the useCallback, which guarantees that React
		// returns the same function instance between renderings. JS equality check returns false to functions with
		// the same code but located in different locations, therefore, the useCallback is crucial to pass
		// the JS equality check between renderings.
	}, [fetchMoviesHandler]);
	let content = <p>No Movies Found. Try Again.</p>;
	if (isLoading) {
		content = <p>Loading ...</p>;
	}
	if (!isLoading && movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}
	if (error) {
		content = <p>{error}</p>;
	}
	async function addMovieHandler(addedMovie) {
		const rsvp = await fetch(
			"https://react-http-104c4-default-rtdb.firebaseio.com/movies.json",
			{
				method: "POST",
				// body requires json data in string format, NOT a JS object, therefore need to stringify
				body: JSON.stringify(addedMovie),
				headers: {
					// technically Firebase DOES NOT require this header, but many other APIs will require
					// this header definition to read the json data
					"Content-Type": "application/json",
				},
			}
		);
		const data = await rsvp.json();
		console.log(data);
	}
	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
