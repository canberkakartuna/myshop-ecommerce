import styled from "styled-components";

const Image = styled.img`
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};
	margin: ${(props) => props.margin || "0"};
	padding: ${(props) => props.padding || "0"};
	object-fit: ${(props) => props.objectFit || "cover"};
`;

export default Image;
