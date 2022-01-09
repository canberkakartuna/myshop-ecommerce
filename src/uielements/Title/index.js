import styled from "styled-components";

const H1 = styled.h1`
	font-size: ${(props) => props.fontSize || "32px"};
	font-weight: ${(props) => props.fontWeight || "normal"};
	font-style: ${(props) => props.fontStyle || "normal"};
`;

export const Subtitle = styled.p`
	font-weight: bold;
	font-size: 22px;
	line-height: 24px;
	color: #656565;
`;

export const Span = styled.span`
	font-size: ${(props) => props.fontSize || "16px"};
	font-weight: ${(props) => props.fontWeight || "normal"};
`;

export default H1;
