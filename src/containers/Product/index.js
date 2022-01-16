import React, { useEffect, useState } from "react";

import Block, { FlexBlock } from "uielements/Block";
import H1, { Span, Subtitle } from "uielements/Title";
import Button from "uielements/Button";
import Paragraph from "uielements/Paragraph";
import Image from "uielements/Image";
import Line from "uielements/Line";

import SectionTitle from "components/SectionTitle";
import ImageWithContent from "components/ImageWithContent";
import Filter from "components/Filter";

import { Select } from "uielements/Inputs";

import SortIcon from "assets/images/Icons/sort.png";

import ProductList from "containers/Product/ProductList";

import { getProductsById } from "api/network";

import { uniqueId, capitalize } from "lodash";

const Product = () => {
	const [product, setProduct] = useState({});
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		async function fetchData() {
			const products = await getProductsById("5");
			setProduct(products.data());
		}

		fetchData();
	}, []);

	let sectionTitle = (
		<>
			Photography / <Span>Premium Photos</Span>
		</>
	);

	let action = (
		<FlexBlock>
			<FlexBlock justifyContent="flex-start">
				<Image src={SortIcon} alt="sort" />
				<Span>Sort By</Span>
			</FlexBlock>
			<Select>
				<option value="Price">Price</option>
				<option value="Alphabetically">Alphabetically</option>
			</Select>
		</FlexBlock>
	);

	return (
		<Block margin="30px 0px">
			<SectionTitle
				title={product?.name}
				action={
					<Button
						width="257px"
						height="47px"
						onClick={() => {
							console.log("test");
						}}
					>
						<Span fontSize="23px" fontWeight="500">
							Add to Chart
						</Span>
					</Button>
				}
			/>

			<ImageWithContent
				src={product?.image?.src}
				alt={product?.image?.alt}
				width="100%"
				title="Photo of the day"
			/>

			<FlexBlock alignItems="normal" margin="50px 0 0 0">
				<Block width="690px">
					<H1>About the {product?.name}</H1>
					<Subtitle>{capitalize(product?.category)}</Subtitle>
					<Paragraph>{product?.details?.descriptions}</Paragraph>
				</Block>
				<Block textAlign="right">
					<H1>People Also Buy</H1>
					<Block>
						{product?.details?.recommendations?.map((item, index) => (
							<Image
								src={item.src}
								alt={item.alt}
								width="117px"
								height="147px"
								margin="30px 0 30px 30px"
								key={uniqueId("i-")}
							/>
						))}
					</Block>
					<Subtitle>Details</Subtitle>
					<Span>Size: 1020 X 1020 pixel</Span> <br />
					<Span>Size: 15 mb</Span>
				</Block>
			</FlexBlock>

			<Line width="100%" margin="30px 0 0 0" border="4px solid #E4E4E4" />

			<Block>
				<SectionTitle title={sectionTitle} action={action} />
				<FlexBlock justifyContent="space-between" alignItems="flex-start">
					<Filter title="Category" currentPage={currentPage} />
					<ProductList
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</FlexBlock>
			</Block>
		</Block>
	);
};

export default Product;
