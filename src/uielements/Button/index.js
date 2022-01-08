import styled from "styled-components";

const Button = styled.button`
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};
	background-color: ${(props) => props.backgroundColor || "black"};
	color: ${(props) => props.color || "white"};
	border: ${(props) => props.border || "none"};
	border-radius: ${(props) => props.borderRadius || "0"};
	cursor: pointer;
`;

export default Button;
