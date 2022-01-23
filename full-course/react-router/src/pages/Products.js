import { Link } from "react-router-dom";
function Products() {
	return (
		<section>
			<h1>Products</h1>
			<ul>
				<li>
					<Link to="/products/p1">Kitchen Sink</Link>
				</li>
				<li>
					<Link to="/products/p2">Stringers</Link>
				</li>
				<li>
					<Link to="/products/p3">Cups</Link>
				</li>
			</ul>
		</section>
	);
}
export default Products;
