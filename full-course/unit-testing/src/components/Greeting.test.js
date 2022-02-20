import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
// userEvent is obj that helps us trigger user events in virtual testing screen
import userEvent from "@testing-library/user-event";

// describe is a globally available function that allows
// us to group tests into suites. here the suite is related
// to the 'Greeting' component. describe has 2 args: 1) suite description
// 2) the actual tests themselves
describe("Greeting component", () => {
	test("renders Hello mate as text", () => {
		// Arrange
		// use jsx inside render
		render(<Greeting />);

		// Act
		// ...nothing

		// Assert
		// can use regular expression OR hard code a string
		// second argument: can insert all kinds of conditions, including
		// whether you want an exact match, which is the default
		const helloMateElement = screen.getByText("Hello mate!", { exact: true });
		expect(helloMateElement).toBeInTheDocument();

		// can also expect the opposite by adding 'not' logic this way:
		// expect(helloMateElement).not.toBeInTheDocument();
	});

	// tests can go into this suite one after the other
	// test("renders ! as a text", () => {
	// 	render(<Greeting />);
	// 	const exclamationElement = screen.getByText("!", { exact: false });
	// 	console.log(exclamationElement);
	// 	expect(exclamationElement).toBeInTheDocument();
	// });

	test("renders good to see you as a text", () => {
		render(<Greeting />);
		const goodToSeeElement = screen.getByText("good to see you", {
			exact: false,
		});
		// console.log(goodToSeeElement);
		expect(goodToSeeElement).toBeInTheDocument();
	});

	test("renders Changed! as a text IFF button was clicked", () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole("button");
		// click needs x1 input - element on which you want to click
		userEvent.click(buttonElement);

		// Assert
		const changedElement = screen.getByText("Changed!", {
			exact: false,
		});
		expect(changedElement).toBeInTheDocument();
	});

	test("does not render good to see you if button pressed", () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole("button");
		// click needs x1 input - element on which you want to click
		userEvent.click(buttonElement);

		// Assert
		const goodToSeeElement = screen.queryByText("good to see you", {
			exact: false,
		});
		expect(goodToSeeElement).toBeNull();
	});
});
