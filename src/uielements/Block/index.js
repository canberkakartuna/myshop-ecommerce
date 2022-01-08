import styled from "styled-components";

const Block = styled.div`
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};
	margin: ${(props) => props.margin || "0"};
	padding: ${(props) => props.padding || "0"};
	position: ${(props) => props.position || "relative"};
	bottom: ${(props) => props.bottom || "auto"};
	background-color: ${(props) => props.backgroundColor || "transparent"};
`;

export const FlexBlock = styled(Block)`
	display: flex;
	flex-direction: ${(props) => props.flexDirection || "row"};
	justify-content: ${(props) => props.justifyContent || "flex-start"};
	align-items: ${(props) => props.alignItems || "flex-start"};
	flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;

export default Block;
