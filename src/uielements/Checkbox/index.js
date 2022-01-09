import React from "react";
import styled from "styled-components";

import { FlexBlock } from "uielements/Block";

const Check = styled.input.attrs({ type: "checkbox" })`
	width: 23px;
	height: 23px;
	margin-right: 23px;
	border: 2px solid #000000;
`;
const Label = styled.label``;

const Checkbox = ({ value, onClick = () => {} }) => {
	return (
		<FlexBlock justifyContent="flex-start" margin="30px 0">
			<Check name={value} value={value} onClick={onClick} />
			<Label htmlFor={value}>{value}</Label>
		</FlexBlock>
	);
};

export default Checkbox;
