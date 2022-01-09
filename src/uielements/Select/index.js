import styled from "styled-components";

const Select = styled.select`
	height: 35px;
	background: white;
	color: black;
	font-size: 14px;
	border: none;
	text-align: right;
	outline: none;

	option {
		color: black;
		background: white;
		display: flex;
		white-space: pre;
		min-height: 20px;
		padding: 0px 2px 1px;
	}
`;

export default Select;
