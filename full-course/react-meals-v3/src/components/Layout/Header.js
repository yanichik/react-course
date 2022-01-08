import styles from "./Header.module.css";
import MealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onOpenCart={props.onOpenCart} />
			</header>
			{/* showing the image here - shouldn't be in header */}
			<div className={styles["main-image"]}>
				<img src={MealsImg} alt="An awesome meal"></img>
			</div>
		</>
	);
}

export default Header;
