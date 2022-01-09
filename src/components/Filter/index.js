import React, { useEffect, useState } from "react";

import Block from "uielements/Block";
import H1 from "uielements/Title";
import Checkbox from "uielements/Checkbox";

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
	return (
		<Block>
			{title && <H1>{title}</H1>}
			{filters.map((filter) => (
				<Checkbox value={filter} key={uniqueId("f-")} />
			))}
		</Block>
	);
};

export default Filter;
