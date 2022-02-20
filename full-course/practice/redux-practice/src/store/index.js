// NOTE: with redux you don't actually change the state.
// You clone and create updated copies of the state that are then
// inserted into your React components.
// ALSO NOTE: the state clones enables us to use redux devtools
// to historical info on our state and how it has changed/progressed
import { createStore } from "redux";

// this sets up an initial state which will be used
// NOTE: it's good practice to setup initial state prior to
const myInitState = {
	posts: [{id: 1, post: "hello world!"}],
	signUpModal: {
		open: false,
	},
};

// NOTE: reducer will be called AT LEAST a couple of times. Since it is an argument
// to createStore, it will be called initially to setup the state's initial state AND
// each time the action is dispatched

const myReducer = (state = myInitState, action) => {
	if (action.type === "ADD_POST") {
		// this push method of updating state is WRONG, b/c this
		// would actually update the state. INSTEAD we need to clone
		// and update state properties of the clone
		// state.posts.push(action.payload);

		// therefore, we then do the following:

    // this created the clone: Object.assign({}, state)
		return Object.assign({}, state, {
      
      // With our initial state cloned, we then override 
      // its posts property with the third argument:
			posts: state.posts.concat(action.payload),
		});
	}
	return state;
};

// creates store, which is a JS obj w/ API that includes
// these properties/methods: getState, dispatch, and subscribe
// NOTE: createStore function NEEDS to take the reducer as its argument.
// the reducer (defined above) takes 2 arguments: initial state + action
const myStore = createStore(myReducer);
export default myStore;
