import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Block from "uielements/Block";
import Grid from "uielements/Grid";

import ImageWithContent from "components/ImageWithContent";
import Pagination from "components/Pagination";

import { getProductsAfterLastDoc } from "api/network";

import { uniqueId } from "lodash";

const ProductList = ({ allProductsCount }) => {
	const [products, setProducts] = useState([]);

	const [pageCount, setPageCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		if (allProductsCount > 0) {
			fetchProducts(currentPage);
			setPageCount(Math.ceil(allProductsCount / 6));
		}
	}, [allProductsCount, currentPage]);

	async function fetchProducts(page) {
		setProducts(() => []);
		const products = await getProductsAfterLastDoc(page);
		products.forEach((product) => {
			setProducts((products) => [...products, product.data()]);
		});
	}

	if (!products.length) {
		return <div>Loading...</div>;
	}

	return (
		<Block>
			<Grid>
				{products?.map((product) => {
					return (
						<ImageWithContent
							title={product.bestseller && "Bestseller"}
							top={product.bestseller}
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
			<Pagination pageCount={pageCount} setCurrentPage={setCurrentPage} />
		</Block>
	);
};

const mapStateToProps = (state) => {
	return {
		allProductsCount: state.product.allProductsCount,
	};
};

export default connect(mapStateToProps)(ProductList);
