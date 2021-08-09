import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card.js";
import FavoritesContext from "../../store/favorites-context";
function MeetupItem(props) {
	const favoritesCtx = useContext(FavoritesContext);
	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);

	function toggleFavoriteStatusHandler() {
		if (itemIsFavorite) favoritesCtx.removeFavorite(props.meetup.id);
		else {
			favoritesCtx.addFavorite({
				id: props.meetup.id,
				description: props.meetup.description,
				image: props.meetup.image,
				location: props.meetup.location,
			});
		}
	}

	return (
		<li key={props.meetup.id} className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.meetup.image} alt="/" className={classes.img} />
				</div>
				<div className={classes.content}>
					<h3 className={classes.content.h3}>{props.meetup.description}</h3>
					<p>{props.meetup.location}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler} className={classes.actions.button}>{itemIsFavorite ? "Remove Favorite" : "Add Favorite"}</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
