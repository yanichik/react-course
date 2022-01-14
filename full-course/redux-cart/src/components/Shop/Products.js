import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const productOptions = [
	{
		title: "Test",
		price: 6,
		description: "The best test product bar none!",
		quantity: 0,
		totalPrice: 0,
		id: 1,
	},
	{
		title: "iPhone",
		price: 1000,
		description: "Super phone!",
		quantity: 0,
		totalPrice: 0,
		id: 2,
	},
	{
		title: "crackers",
		price: 3.5,
		description: "Crunchy like you wouldn't believe!",
		quantity: 0,
		totalPrice: 0,
		id: 3,
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{productOptions.map((item) => (
					<ProductItem item={item} key={item.id}></ProductItem>
				))}
			</ul>
		</section>
	);
};

export default Products;
