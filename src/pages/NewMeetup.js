import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm.js";
import Card from "../components/ui/Card.js";
function NewMeetupPage() {
	function addMeetupHandler(meetupData) {
    let history = useHistory();
		// send http request using Firebase API to DB
		// fetch 1st arg: URL to which want to send request
		// the firebase URL is adaptable - can create table in DB by adding name
		// following the '.com/', such as '.com/meetups' will add a 'meetups' table/collection
		// must add '.json' to end of requested collection - required by firebase
		// by default, fetch sends GET request. to store data in firebase DB, need to send POST
		// request.
		fetch(
			"https://react-getting-started-be137-default-rtdb.firebaseio.com/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetupData),
				headers: {
					"Content-Type": "application/json",
				}
			}
		);
    
  }
	return (
		<div>
			<h1>Add New Meetup</h1>
			<Card>
				<NewMeetupForm onAddMeetup={addMeetupHandler} />
			</Card>
		</div>
	);
}
export default NewMeetupPage;
