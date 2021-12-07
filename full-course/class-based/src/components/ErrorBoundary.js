import { Component } from "react";
class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { hasError: false };
	}
	componentDidCatch(error) {
		console.log(error);
		this.setState({ hasError: true });
	}
	render() {
		if (this.state.hasError) {
			console.log(this.state.hasError);
			return (
				<p style={{ color: "green" }}>
					Something Went Wrong. Go Back and Try Again.
				</p>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
