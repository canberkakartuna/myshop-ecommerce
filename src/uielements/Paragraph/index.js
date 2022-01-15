import styled from "styled-components";

const Paragraph = styled.p`
	color: #656565;
	width: ${(props) => props.width || "100%"};
	padding: ${(props) => props.padding || "0"};
	font-size: 18px;
	font-weight: ${(props) => props.fontWeight || "normal"};
	text-align: ${(props) => props.textAlign || "left"};
	line-height: 150%;
`;

export default Paragraph;
