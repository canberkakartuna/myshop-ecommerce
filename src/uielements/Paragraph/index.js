import styled from "styled-components";

const Paragraph = styled.p`
	width: ${(props) => props.width || "100%"};
	padding: ${(props) => props.padding || "0"};
	font-size: ${(props) => props.fontSize || "1rem"};
	font-weight: ${(props) => props.fontWeight || "normal"};
	text-align: ${(props) => props.textAlign || "left"};
`;

export default Paragraph;