import classes from "./Notification.module.css";

const Notification = (props) => {

	let specialClasses = "";

	if (props.notification.status === "error") {
		specialClasses = classes.error;
	}
	if (props.notification.status === "success") {
		specialClasses = classes.success;
	}
	if (props.notification.status === "pending") {
		specialClasses = classes.pending;
	}

	const cssClasses = `${classes.notification} ${specialClasses}`;

	return (
		<section className={cssClasses}>
			<h2>{props.notification.title}</h2>
			<p>{props.notification.message}</p>
		</section>
	);
};

export default Notification;
