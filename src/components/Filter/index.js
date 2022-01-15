import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Block from "uielements/Block";
import H1 from "uielements/Title";
import Checkbox from "uielements/Checkbox";

import { getFilteredProducts } from "api/network";

import { setProducts } from "redux/product/action";

import { uniqueId } from "lodash";

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

const Filter = ({ title = false, filters = [], currentPage, setProducts }) => {
	const [filterOptions, setFilterOptions] = useState([]);
	const [filterEl, setFilterEl] = useState([]);

	useEffect(() => {
		let filterOptions = filters.map((filter) => ({
			value: filter,
			key: uniqueId("filter-"),
			checked: false,
		}));
		console.log(filterOptions);
		setFilterOptions(filterOptions);
	}, [filters]);

	const filterProduct = async (filterArr) => {
		let filteredProducts = [];
		let products = await getFilteredProducts(currentPage, filterArr);
		products.forEach((product) => {
			product.docs.forEach((doc) => {
				filteredProducts.push(doc.data());
			});
		});

		setProducts(filteredProducts);
	};

	const handleCheckboxClick = (e) => {
		let filters;

		let checked = e.target.checked;
		let id = e.target.id;

		let targetDataKey = filterOptions.filter((el) => el.value === id)[0]?.key;
		let options = filterOptions.map((el) => {
			if (el.key === targetDataKey) {
				el.checked = checked;
			}

			return el;
		});

		setFilterOptions(options);

		if (checked) {
			setFilterEl((filterEl) => [...filterEl, id]);
			filters = [...filterEl, id];
		} else {
			setFilterEl((filterEl) => filterEl.filter((el) => el !== id));
			filters = filterEl.filter((el) => el !== id);
		}

		filterProduct(filters);
	};

	return (
		<Block width="25%">
			<Block>
				{title && <H1>{title}</H1>}
				{filterOptions?.map((filter) => (
					<Checkbox
						key={filter.key}
						value={filter.value}
						checked={filter.checked}
						onChange={handleCheckboxClick}
					/>
				))}
			</Block>
			<Block margin="50px 0 0 0">
				{<H1>Price range</H1>}
				{filterPriceRangeOptions?.map((filter) => (
					<Checkbox value={filter.label} key={uniqueId("pf-")} />
				))}
			</Block>
		</Block>
	);
};

const mapStateToProps = (state) => ({
	filters: state.product.filters,
});

const mapDispatchToProps = {
	setProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
