import styled from "styled-components";

const H1 = styled.h1`
	font-size: ${(props) => props.fontSize || "32px"};
	font-weight: ${(props) => props.fontWeight || "normal"};
	font-style: ${(props) => props.fontStyle || "normal"};
`;

export const Span = styled.span`
	font-size: ${(props) => props.fontSize || "16px"};
	font-weight: ${(props) => props.fontWeight || "normal"};
`;

export default H1;
