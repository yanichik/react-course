import React from "react";
import { connect } from "react-redux";

function App({posts}) {
	return (
		<div>
			<h2>Let's get started!</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.post}</li>
				))}
			</ul>
		</div>
	);
}

// this func returns the portion of the state that you intend
// to connect within this App component
const mapStateToProps = (state) => {
	return { posts: state.posts };
};

// the connect function (imported from react-redux) actually
// connects the state to this app, while the mapStateToProps
// function passes in the portion of the state that you want to connect,
// since you don't have to connect the entire state - saves space
export default connect(mapStateToProps)(App);
