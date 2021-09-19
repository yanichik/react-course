import Card from "../UI/Card";
import styles from "./DisplayUsers.module.css";
function DisplayUsers(props) {
	let len = props.users.length;
	if (len > 0) {
		return (
			<Card>
				{props.users.length > 0 &&
					props.users.map((user) => (
						<div key={Math.random()} className={styles.item}>
							{user.username} ({user.age} years old)
						</div>
					))}
			</Card>
		);
	} else return <div></div>;
}

export default DisplayUsers;
