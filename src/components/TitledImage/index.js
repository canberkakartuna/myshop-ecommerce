import React from "react";

import Block, { FlexBlock } from "uielements/Block";
import Image from "uielements/Image";
import Paragraph from "uielements/Paragraph";
import Button from "uielements/Button";

export default function TitledImage({
	top = false,
	src,
	alt,
	title,
	width = false,
}) {
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
		<>
			<Block>
				<Image src={src} alt={alt} width={width} />
				{title && (
					<FlexBlock {...blockProps}>
						<Paragraph textAlign="center">{title}</Paragraph>
					</FlexBlock>
				)}
			</Block>
			{top && <Button>Add to Chart</Button>}
		</>
	);
}
