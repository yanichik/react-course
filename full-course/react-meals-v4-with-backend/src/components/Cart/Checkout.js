import styles from "./Checkout.module.css";
import { useRef, useState } from "react";

function Checkout(props) {
	const nameRef = useRef();
	const streetRef = useRef();
	const postalRef = useRef();
	const cityRef = useRef();

	const [inputsValidity, setInputsValidity] = useState({
		nameIsValid: false,
		streetIsValid: true,
		postalIsValid: true,
		cityIsValid: true,
	});

	const [isTouched, setIsTouched] = useState({
		nameIsTouched: false,
		streetIsTouched: false,
		postalIsTouched: false,
		cityIsTouched: false,
	});

	const hasChar = (char) => {
		return !(char.trim() === "");
	};
	const has5Chars = (char) => {
		return char.length === 5;
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const enteredName = nameRef.current.value;
		const enteredStreet = streetRef.current.value;
		const enteredPostal = postalRef.current.value;
		const enteredCity = cityRef.current.value;

		const enteredNameIsValid = hasChar(enteredName);
		const enteredStreetIsValid = hasChar(enteredStreet);
		const enteredPostalIsValid = has5Chars(enteredPostal);
		const enteredCityIsValid = hasChar(enteredCity);

		setInputsValidity({
			nameIsValid: enteredNameIsValid,
			streetIsValid: enteredStreetIsValid,
			postalIsValid: enteredPostalIsValid,
			cityIsValid: enteredCityIsValid,
		});

		const formIsValid =
			enteredNameIsValid &&
			enteredStreetIsValid &&
			enteredPostalIsValid &&
			enteredCityIsValid;

		if (!formIsValid) {
			return;
		}
		// send to database
		props.onConfirm({
			name: enteredName,
			street: enteredStreet,
			postal: enteredPostal,
			city: enteredCity,
		});
	};

	const nameBlur = () => {
		setIsTouched((prevIsTouched) => {
			return { ...prevIsTouched, nameIsTouched: true };
		});
	};
	const streetBlur = () => {
		return;
	};
	const postalBlur = () => {
		return;
	};
	const cityBlur = () => {
		return;
	};

	const nameChange = (event) => {
		const enteredNameVal = event.target.value;
		setIsTouched((prevIsTouched) => {
			return { ...prevIsTouched, nameIsTouched: true };
		});
		if (hasChar(enteredNameVal)) {
			setInputsValidity((prevInputsValidity) => {
				return { ...prevInputsValidity, nameIsValid: true };
			});
		} else {
			setInputsValidity((prevInputsValidity) => {
				return { ...prevInputsValidity, nameIsValid: false };
			});
		}
	};

	const nameStylesClasses =
		isTouched.nameIsTouched && !inputsValidity.nameIsValid
			? `${styles.control} ${styles.invalid}`
			: `${styles.control}`;
	const streetStylesClasses = inputsValidity.streetIsValid
		? `${styles.control}`
		: `${styles.control} ${styles.invalid}`;
	const postalStylesClasses = inputsValidity.postalIsValid
		? `${styles.control}`
		: `${styles.control} ${styles.invalid}`;
	const cityStylesClasses = inputsValidity.cityIsValid
		? `${styles.control}`
		: `${styles.control} ${styles.invalid}`;

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={nameStylesClasses}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					ref={nameRef}
					onBlur={nameBlur}
					onChange={nameChange}
				/>
				{!inputsValidity.nameIsValid && isTouched.nameIsTouched && (
					<p className={styles.invalidEntry}>Enter Valid Name</p>
				)}
			</div>
			<div className={streetStylesClasses}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetRef} onBlur={streetBlur} />
				{!inputsValidity.streetIsValid && (
					<p className={styles.invalidEntry}>Enter Valid Street</p>
				)}
			</div>
			<div className={postalStylesClasses}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalRef} onBlur={postalBlur} />
				{!inputsValidity.postalIsValid && (
					<p className={styles.invalidEntry}>Enter Valid Postal Code</p>
				)}
			</div>
			<div className={cityStylesClasses}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityRef} onBlur={cityBlur} />
				{!inputsValidity.cityIsValid && (
					<p className={styles.invalidEntry}>Enter Valid City</p>
				)}
			</div>
			<div className={styles.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={styles.submit}>Confirm</button>
			</div>
		</form>
	);
}
export default Checkout;
