import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";
function NewMeetupForm(props) {
	const locationRef = useRef();
	const imageRef = useRef();
	const descriptionRef = useRef();

	function formSubmitHandler(event){
		// prevents the browser's default action of submitting the form's data to the server.
		// instead allows this function to handle the event and submission
		event.preventDefault();
		const enteredLocation = locationRef.current.value;
		const enteredImage = imageRef.current.value;
		const enteredDescription = descriptionRef.current.value;
		const meetupData = {
			location: enteredLocation,
			description: enteredDescription,
			image: enteredImage
		}
		props.onAddMeetup(meetupData);
	}
	return (
		<section>
			<form className={classes.form} onSubmit={formSubmitHandler}>
				<div className={classes.control}>
					<label htmlFor="location">Location</label>
					<input id="location" type="text" required ref={locationRef}/>
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Image</label>
					<input id="image" type="url" required ref={imageRef}/>
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea id="description" type="text" rows="5" required ref={descriptionRef} />
				</div>
				<div className={classes.actions}>
					<button>Submit</button>
				</div>
			</form>
		</section>
	);
}

export default NewMeetupForm;
