import { findAllByRole, render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async component", () => {
	test("renders at least x1 list item", async () => {
		// Arrange
		// this makes fetch, which lives in the window, into a dummy jest function.
		// this overwrites the built-in func with a dummy func
		window.fetch = jest.fn();
		// this defines what the fetch function needs to resolve to when
		// it is being called -> needs to resolve to something that is being
		// used by our code. In our case, it needs to resolve  to an obj that
		// has a json method (see Async.js code)
		window.fetch.mockResolvedValueOnce({
			// making the resolution of mock function contain a json method,
			// which is itself an async function that returns an array. This is exacty
			// how the fetch function acts in our Async.js code
			json: async () => [{ id: 1, title: "first post" }],
		});
		render(<Async />);

		// Act
		// none...

		// Assert
		const listElements = await screen.findAllByRole("listitem");
		expect(listElements).not.toHaveLength(0);
	});
});
