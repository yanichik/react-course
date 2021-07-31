import MeetupItem from "./MeetupItem.js";
import classes from './MeetupList.module.css'
function MeetupList(props) {
	return (
		<ol className={classes.list}>
			{props.meetups.map((meetup) => {
				return <MeetupItem key={meetup.id} meetup={meetup} />;
			})}
		</ol>
	);
}

export default MeetupList;
