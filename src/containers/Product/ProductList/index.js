import React, { useEffect, useState } from "react";

import Block, { FlexBlock } from "uielements/Block";
import Grid from "uielements/Grid";

import ImageWithContent from "components/ImageWithContent";

import { getAllProducts } from "api/network";

import { uniqueId } from "lodash";

export default function ProductList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const products = await getAllProducts();
			products.forEach((product) => {
				console.log(product.data());
				setProducts((products) => [...products, product.data()]);
			});
		}

		fetchProducts();
	}, []);

	return (
		<Block>
			<Grid>
				{products.map((product) => {
					return (
						<ImageWithContent
							key={uniqueId()}
							src={product.image.src}
							alt={product.image.alt}
							width="282px"
							height="390px"
							buttonStatus
						/>
					);
				})}
			</Grid>
		</Block>
	);
}
