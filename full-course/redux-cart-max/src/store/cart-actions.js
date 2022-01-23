import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = (url) => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const rsvp = await fetch(
				"https://react-http-104c4-default-rtdb.firebaseio.com/cart.json"
			);
			if (!rsvp.ok) {
				throw new Error("Error: Data Not Received Properly!");
			}
			const data = await rsvp.json();
			return data;
		};
		try {
			const cartData = await sendRequest();
			if (!cartData.items) {
				dispatch(
					cartActions.replaceCart({
						items: [],
						totalQuantity: 0,
						cartChanged: false,
					})
				);
			} else {
				dispatch(cartActions.replaceCart(cartData));
			}
		} catch (error) {
			dispatch(
				uiActions.notify({
					status: "error",
					title: "Error ...",
					message: "Error: Fetching Cart Data Unsuccessful!",
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	// returning function with dispatch as parameter - here it is async b/c sending fetch later on in code
	return async (dispatch) => {
		// dispatch pending notification
		dispatch(
			uiActions.notify({
				status: "pending",
				title: "Sending ...",
				message: "Sending Cart Data!",
			})
		);
		// prior to calling dispatch, can perform any side effects - prior to reaching reducer
		// here sending fetch to send cart data
		const sendCart = async () => {
			const rsvp = await fetch(
				"https://react-http-104c4-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(cart),
				}
			);
			if (!rsvp.ok) {
				throw new Error("Error: Data Not Send Properly!");
			}
		};
		sendCart()
			.then(() => {
				setTimeout(() => {
					dispatch(
						uiActions.notify({
							status: "success",
							title: "Success!",
							message: "Cart Data Sent Successfully!",
						})
					);
				});
			}, 500)
			.catch((error) => {
				dispatch(
					uiActions.notify({
						status: "error",
						title: "Error ...",
						message: "Error: Cart Data Sent Unsuccessfully!",
					})
				);
			});
	};
};
