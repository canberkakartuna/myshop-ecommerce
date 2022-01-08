import styled from "styled-components";

const H1 = styled.h1`
	font-size: ${(props) => props.fontSize || "1.5rem"};
	font-weight: ${(props) => props.fontWeight || "normal"};
	font-style: ${(props) => props.fontStyle || "normal"};
`;

export default H1;
