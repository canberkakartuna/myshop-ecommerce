import React, { useEffect } from "react";

import Block, { FlexBlock } from "uielements/Block";
import H1, { Span, Subtitle } from "uielements/Title";
import Button from "uielements/Button";
import Paragraph from "uielements/Paragraph";
import Image from "uielements/Image";
import Line from "uielements/Line";

import SectionTitle from "components/SectionTitle";
import TitledImage from "components/TitledImage";
import Filter from "components/Filter";

import { getProductsById } from "api/network";

import { uniqueId, capitalize } from "lodash";

const Product = () => {
	const [product, setProduct] = React.useState({});

	useEffect(() => {
		async function fetchData() {
			const products = await getProductsById("5");
			setProduct(products.data());
			console.log(products.data());
		}

		fetchData();
	}, []);

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
			<TitledImage
				src={product?.image?.src}
				alt={product?.image?.alt}
				width="100%"
				title="Photo of the day"
			/>
			<FlexBlock alignItems="normal">
				<Block width="690px">
					<H1>About the {product?.name}</H1>
					<Subtitle>{capitalize(product?.category)}</Subtitle>
					<Paragraph>{product?.details?.descriptions}</Paragraph>
				</Block>
				<Block width="33%" textAlign="right">
					<H1>People Also Buy</H1>
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
			</FlexBlock>
			<Line width="100%" margin="30px 0 0 0" border="4px solid #E4E4E4" />
			<Filter title="Category" />
		</Block>
	);
};

export default Product;
