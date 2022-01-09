import styled from "styled-components";

const Block = styled.div`
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};
	margin: ${(props) => props.margin || "0"};
	padding: ${(props) => props.padding || "0"};
	position: ${(props) => props.position || "relative"};
	bottom: ${(props) => props.bottom || "auto"};
	top: ${(props) => props.top || "auto"};
	background-color: ${(props) => props.backgroundColor || "transparent"};
	text-align: ${(props) => props.textAlign || "left"};
`;

export const FlexBlock = styled(Block)`
	display: flex;
	flex-direction: ${(props) => props.flexDirection || "row"};
	justify-content: ${(props) => props.justifyContent || "space-between"};
	align-items: ${(props) => props.alignItems || "center"};
	flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;

export default Block;
