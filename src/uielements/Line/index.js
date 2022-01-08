import styled from "styled-components";

const Line = styled.hr`
	width: ${(props) => props.width || "auto"};
	margin: ${(props) => props.margin || "0"};
	border: ${(props) => props.border || "0"};
`;

export default Line;
