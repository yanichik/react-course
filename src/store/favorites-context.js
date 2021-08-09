import { createContext, useState } from "react";

// FavoritesContext will contain React component therefore capitalized
// takes parameter to set the context. in this case, it is the array of favorites
// and total # of favorites, both starting at blank and 0
const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	// these three will help with autocompletion later
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupId) => {},
	itemIsFavorite: (meetupId) => {},
});

// this component function will be responsible for providing the favorites context
// to all of the other application's components that depend on or are listening to
// the favorites context b/c they are doing something with it, whether just displaying
// the # of favorites (as in case of the navigationlayout) or adding/deleting a favorite, etc.
// It will also update the context values.
export function FavoritesContextProvider(props) {
	// userFavorites is an array that holds all favorites
	const [userFavorites, setUserFavorites] = useState([]);

	function addFavoriteHandler(favoriteMeetup) {
		// when set state function receives function parameter, then the prev state gets
		// passed in
		setUserFavorites((prevUserFavorites) => {
			return userFavorites.concat(favoriteMeetup);
		});
	}

	function removeFavoriteHandler(meetupId) {
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
		});
	}

	// helper function to check if item is part of favorites
	function itemIsFavoriteHandler(meetupId) {
		// some is a vanilla JS method that returns true if the condition is met for
		// any of the userFavorites array
		return userFavorites.some((meetup) => meetup.id === meetupId);
	}

	// holds latest favorites values
	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};
	// .Provider is an built-in property (component) of createContext
	// We will wrap this around the entire application in index.js so that
	// the favorites context can be distributed to the rest of the app, therefore
	// need to include all the children
	// values holds context (latest favorites values) so it can be distributed to all listening
	return (
    // value prop is built-in inside FavoritesContext and MUST BE passed in
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContext;
