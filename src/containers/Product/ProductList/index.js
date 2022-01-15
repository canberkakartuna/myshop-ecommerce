import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Block from "uielements/Block";
import Grid from "uielements/Grid";

import ImageWithContent from "components/ImageWithContent";
import Pagination from "components/Pagination";

import { getProductsByPageNumber } from "api/network";

import { setProducts } from "redux/product/action";

import { uniqueId } from "lodash";

const ProductList = ({
	setProducts,
	products,
	allProductsCount,
	setCurrentPage,
	currentPage,
}) => {
	const [pageCount, setPageCount] = useState(0);

	useEffect(() => {
		async function fetchProducts(page) {
			let fetchedProducts = [];
			const _fetchedProducts = await getProductsByPageNumber(page);
			_fetchedProducts.forEach((product) => {
				fetchedProducts.push(product.data());
			});
			console.log(fetchedProducts);
			setProducts(fetchedProducts);
		}

		if (allProductsCount > 0) {
			fetchProducts(currentPage);
			setPageCount(Math.ceil(allProductsCount / 6));
		}
	}, [allProductsCount, currentPage, setProducts]);

	if (!products.length) {
		return <div>Loading...</div>;
	}

	return (
		<Block>
			<Grid>
				{(products || [])?.map((product) => {
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
		products: state.product.products,
	};
};

const mapDispatchToProps = {
	setProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
