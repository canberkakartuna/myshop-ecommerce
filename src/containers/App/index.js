import React from "react";

import Block from "uielements/Block";

import Navbar from "components/Navbar";

import Product from "containers/Product";

export default function App() {
	return (
		<Block>
			<Navbar />
			<Product />
		</Block>
	);
}
