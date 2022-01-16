import React from "react";
import styled from "styled-components";

import { FlexBlock } from "uielements/Block";

export const Select = styled.select`
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

const Check = styled.input.attrs({ type: "checkbox" })`
	width: 23px;
	height: 23px;
	margin-right: 23px;
	border: 2px solid #000000;
`;

const Label = styled.label``;

export const Checkbox = ({ value, checked, onChange = () => {} }) => {
	return (
		<FlexBlock justifyContent="flex-start" margin="30px 0">
			<Check
				name={value}
				id={value}
				value={value}
				onChange={onChange}
				checked={checked}
			/>
			<Label htmlFor={value}>{value}</Label>
		</FlexBlock>
	);
};

const Radio = styled.input.attrs({ type: "radio" })`
	width: 23px;
	height: 23px;
	margin-right: 23px;
	border: 2px solid #000000;
`;

export const RadioButton = ({ name, value, checked, onChange = () => {} }) => {
	return (
		<FlexBlock justifyContent="flex-start" margin="30px 0">
			<Radio
				name={name}
				id={value}
				value={value}
				onChange={onChange}
				checked={checked}
			/>
			<Label htmlFor={value}>{value}</Label>
		</FlexBlock>
	);
};
