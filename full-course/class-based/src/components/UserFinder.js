import { Fragment, useState, useEffect, Component } from "react";
import UsersContext from "./user-context";
import ErrorBoundary from "./ErrorBoundary";
import Users from "./Users";
import classes from "./UserFinder.module.css";

class UserFinder extends Component {
	static contextType = UsersContext;
	constructor() {
		super();
		this.state = {
			filteredUsers: [],
			searchTerm: "",
		};
	}
	searchChangeHandler = (event) => {
		this.setState({
			searchTerm: event.target.value,
		});
	};

	componentDidMount() {
		// Send http request...
		this.setState({ filteredUsers: this.context.users });
	}

	// prevProps and prevState must be 1st and 2nd components
	// they can be named anything but this is the convention
	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: this.context.users.filter((user) =>
					user.name.includes(this.state.searchTerm)
				),
			});
		}
	}
	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type="search" onChange={this.searchChangeHandler.bind(this)} />
				</div>
				<ErrorBoundary>
					<Users users={this.state.filteredUsers} />
				</ErrorBoundary>
			</Fragment>
		);
	}
}

// const UserFinder = () => {
// const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// const [searchTerm, setSearchTerm] = useState("");

// useEffect(() => {
// 	setFilteredUsers(
// 		DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
// 	);
// }, [searchTerm]);

// const searchChangeHandler = (event) => {
// 	setSearchTerm(event.target.value);
// };

// return (
// 	<Fragment>
// 		<div className={classes.finder}>
// 			<input type="search" onChange={searchChangeHandler} />
// 		</div>
// 		<Users users={filteredUsers} />
// 	</Fragment>
// );
// };

export default UserFinder;
