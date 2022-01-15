import React, { useEffect } from "react";
import { connect } from "react-redux";

import Block from "uielements/Block";

import Navbar from "components/Navbar";

import Product from "containers/Product";

import { getAllProducts } from "api/network";

import { setAllProductsCount, setFilters } from "redux/product/action";

const App = ({ setAllProductsCount, setFilters }) => {
	useEffect(() => {
		const fetchProductsInfo = async () => {
			let products = await getAllProducts();
			let count = products.size;
			console.log(count);

			let filters = [
				...new Set(products.docs.map((product) => product.data()?.category)),
			];

			setAllProductsCount(count);
			setFilters(filters);
		};

		fetchProductsInfo();
	}, [setAllProductsCount, setFilters]);

	return (
		<Block>
			<Navbar />
			<Product />
		</Block>
	);
};

const mapDispatchToProps = {
	setAllProductsCount,
	setFilters,
};

export default connect(null, mapDispatchToProps)(App);
