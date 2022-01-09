import React from "react";

import Block, { FlexBlock } from "uielements/Block";
import Image from "uielements/Image";
import Paragraph from "uielements/Paragraph";
import Button from "uielements/Button";

export default function ImageWithContent({
	top = false,
	buttonStatus = false,
	src,
	alt,
	title,
	width = false,
	height = false,
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
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					objectFit="cover"
				/>
				{title && (
					<FlexBlock {...blockProps}>
						<Paragraph textAlign="center">{title}</Paragraph>
					</FlexBlock>
				)}
				{buttonStatus && (
					<Block width="282px" height="46px" position="absolute" bottom="0">
						<Button width="100%" height="100%">
							ADD TO CHART
						</Button>
					</Block>
				)}
			</Block>
		</>
	);
}
