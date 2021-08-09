import MeetupList from "../components/meetups/MeetupList.js";
import { useState, useEffect } from "react";
function AllMeetupsPage() {
	// set useState b/c fetch returns a promise but JS will not wait to fetch the data before
	// rendering the return code, thus using state to have load something (s/ loading clock)
	// until the fetch is complete, then will render with data
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		fetch(
			"https://react-getting-started-be137-default-rtdb.firebaseio.com/meetups.json"
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				let meetups =[];
				// data is received from firebase is object of keys and objects where the key
				// is randomly generated number and object is the actual data object/meetup.
				// we need an array of objects b/c we map this data in MeetupList.js
				for (const key in data){
					const meetup = {
						id: key,
						// ...data[key] spreads the rest of the object
						...data[key]
					}
					meetups.push(meetup)
				}
				setIsLoading(false);
				setLoadedMeetups(meetups);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>--- Waiting to Load ---</p>
			</section>
		);
	} else {
		return (
			<section>
				<div style={{ fontSize: "25px", "font-weight": "bolder" }}>
					All Meetups
				</div>
				<MeetupList meetups={loadedMeetups} />
			</section>
		);
	}
}
export default AllMeetupsPage;
