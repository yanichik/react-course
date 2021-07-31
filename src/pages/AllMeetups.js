import MeetupList from '../components/meetups/MeetupList.js'
const dummy_data = [
	{
		id: "id-1",
		location: "nyc",
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jnr-ycKLfJmMmXamEmAi9wHaJ4%26pid%3DApi&f=1",
		description: "statue of liberty",
	},
	{
		id: "id-2",
		location: "sf",
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.47yS2s8sITXdYHQVIMHVSAHaE7%26pid%3DApi&f=1",
		description: "golden gate bridge",
	},
];

function AllMeetupsPage() {
	return (
		<section>
			<div style={{fontSize:"25px", "font-weight":"bolder"}}>All Meetups</div>
			<MeetupList meetups={dummy_data}/>
		</section>
	);
}
export default AllMeetupsPage;
