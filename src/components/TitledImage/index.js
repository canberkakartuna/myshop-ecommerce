import React from "react";

import Block, { FlexBlock } from "uielements/Block";
import Image from "uielements/Image";
import Paragraph from "uielements/Paragraph";

export default function TitledImage() {
	return (
		<Block position="absolute">
			<Image src="https://picsum.photos/800/500" alt="Image" />
			<FlexBlock
				justifyContent="center"
				alignItems="center"
				width="270px"
				height="67px"
				bottom="67px"
				backgroundColor="#FFF"
			>
				<Paragraph textAlign="center">Title</Paragraph>
			</FlexBlock>
		</Block>
	);
}
