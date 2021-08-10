import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  // gives current context snapshot
  const favoritesCtx = useContext(FavoritesContext);
  // console.log(favoritesCtx);

  let content;
  if(favoritesCtx.totalFavorites){
    content = <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
  }
  else{
    content = <p>You have no favorites yet.</p>
  }
	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	);
}
export default FavoritesPage;
