import React, { useEffect, useState } from "react";

import Block from "uielements/Block";
import H1 from "uielements/Title";
import Checkbox from "uielements/Checkbox";

import { getAllProducts } from "api/network";

import { uniqueId } from "lodash";

import api from "api/firebase";

const Filter = ({ title = false }) => {
	const [filters, setFilters] = useState([]);

	let filterPriceRangeOptions = [
		{
			label: "Lower than $20",
		},
		{
			label: "$20 - $100",
		},
		{
			label: "$100 - $200",
		},
		{
			label: "More than $200",
		},
	];

	useEffect(() => {
		api
			.collection("products")
			.doc("8")
			.set({
				price: 115,
				name: "Golden Retriever",
				currency: "USD",
				category: "pets",
				featured: true,
				details: null,
				bestseller: true,
				image: {
					src: "https://images.pexels.com/photos/7210441/pexels-photo-7210441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					alt: "A Girl With Golden",
				},
			});
		if (title) {
			async function fetchFilter() {
				let filters = [];
				const categories = await getAllProducts();
				categories?.forEach((category) => {
					filters.push(category.data()[title.toLowerCase()]);
				});
				setFilters([...new Set(filters)]);
			}

			fetchFilter();
		}
	}, [title]);

	return (
		<Block width="25%">
			<Block>
				{title && <H1>{title}</H1>}
				{filters.map((filter) => (
					<Checkbox value={filter} key={uniqueId("cf-")} />
				))}
			</Block>
			<Block margin="50px 0 0 0">
				{<H1>Price range</H1>}
				{filterPriceRangeOptions.map((filter) => (
					<Checkbox value={filter.label} key={uniqueId("pf-")} />
				))}
			</Block>
		</Block>
	);
};

export default Filter;
