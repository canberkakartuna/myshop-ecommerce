import React, { useEffect, useState } from "react";

import Block from "uielements/Block";
import H1, { Span } from "uielements/Title";
import Checkbox from "uielements/Checkbox";
import Select from "uielements/Select";

import SectionTitle from "components/SectionTitle";

import { getAllProducts } from "api/network";

import { uniqueId } from "lodash";

const Filter = ({ title = "" }) => {
	const [filters, setFilters] = useState([]);

	useEffect(() => {
		async function fetchFilterCategories() {
			let filters = [];
			const categories = await getAllProducts();
			categories?.forEach((category) => {
				filters.push(category.data()["category"]);
			});
			setFilters([...new Set(filters)]);
		}

		fetchFilterCategories();
	}, []);

	let sectionTitle = (
		<H1>
			Photography / <Span>Premium Photos</Span>
		</H1>
	);

	let action = (
		<Block>
			<Span>Sort By</Span>
			<Select>
				<option value="Price">Price</option>
				<option value="Alphabetically">Alphabetically</option>
			</Select>
		</Block>
	);

	return (
		<>
			<SectionTitle title={sectionTitle} action={action} />
			<Block>
				{title && <H1>{title}</H1>}
				{filters.map((filter) => (
					<Checkbox value={filter} key={uniqueId("f-")} />
				))}
			</Block>
		</>
	);
};

export default Filter;
