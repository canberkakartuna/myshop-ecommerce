import React from "react";

import Block, { FlexBlock } from "uielements/Block";
import H1, { Span } from "uielements/Title";
import Button from "uielements/Button";
import Paragraph from "uielements/Paragraph";

import TitledImage from "components/TitledImage";

import { products } from "mock";

const Product = () => {
	return (
		<Block margin="30px 0px">
			<FlexBlock>
				<H1>{products[0].name}</H1>
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
			</FlexBlock>
			<TitledImage
				src={products[0].image.src}
				alt={products[0].image.alt}
				width="100%"
				title="Photo of the day"
			/>
			<Paragraph>{products[0].details.description}</Paragraph>
		</Block>
	);
};

export default Product;
