import React from "react";

import Block, { FlexBlock } from "uielements/Block";
import Image from "uielements/Image";
import Paragraph from "uielements/Paragraph";

export default function TitledImage({ top = false }) {
	const blockProps = {
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		width: "270px",
		height: "67px",
		bottom: !top && "0px",
		top: top && "0px",
		backgroundColor: "#fff",
	};

	return (
		<Block>
			<Image src="https://picsum.photos/800/500" alt="Image" />
			<FlexBlock {...blockProps}>
				<Paragraph textAlign="center">Title</Paragraph>
			</FlexBlock>
		</Block>
	);
}
