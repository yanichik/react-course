import classes from "./MeetupItem.module.css";
import Card from "../ui/Card.js"
function MeetupItem(props) {
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
					<button className={classes.actions.button}>Add Favorite</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
