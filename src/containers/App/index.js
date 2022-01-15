import React, { useEffect } from "react";
import { connect } from "react-redux";

import Block from "uielements/Block";

import Navbar from "components/Navbar";

import Product from "containers/Product";

import { getAllProductsCount } from "api/network";

import { setAllProductsCount } from "redux/product/action";

const App = ({ setAllProductsCount }) => {
	useEffect(() => {
		const fetchProductsCount = async () => {
			let count = await getAllProductsCount();
			console.log("App: useEffect ", count);
			setAllProductsCount(count);
		};

		fetchProductsCount();
	}, [setAllProductsCount]);

	return (
		<Block>
			<Navbar />
			<Product />
		</Block>
	);
};

const mapDispatchToProps = {
	setAllProductsCount,
};

export default connect(null, mapDispatchToProps)(App);
