import React, { useContext } from "react";
import { ProductsContext } from "../context/products-context";
import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  // you can pull out the entire ProductsContext by:
  // "productCtx = useContext(ProductsContext)" BUT then you would have
  // to dive into the context to pull the actual products. Instead you can
  // pull out the productList directly by doing the following since the 
  // ProductsContext holds the productList inside the "products" property/key
	const productList = useContext(ProductsContext).products;
	return (
		<ul className="products-list">
			{productList.map((prod) => (
				<ProductItem
					key={prod.id}
					id={prod.id}
					title={prod.title}
					description={prod.description}
					isFav={prod.isFavorite}
				/>
			))}
		</ul>
	);
};

export default Products;
