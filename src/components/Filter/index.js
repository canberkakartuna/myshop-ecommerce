import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Block from "uielements/Block";
import H1 from "uielements/Title";
import { Checkbox, RadioButton } from "uielements/Inputs";

import { getFilteredProducts } from "api/network";

import { setProducts } from "redux/product/action";

import { uniqueId } from "lodash";

let filterPriceRangeOptions = [
	{
		value: "Lower than $20",
		checked: false,
		key: uniqueId("pf-"),
		query: [[20, "<"]],
	},
	{
		value: "$20 - $100",
		checked: false,
		key: uniqueId("pf-"),
		query: [
			[20, ">"],
			[100, "<"],
		],
	},
	{
		value: "$100 - $200",
		checked: false,
		key: uniqueId("pf-"),
		query: [
			[100, ">"],
			[200, "<"],
		],
	},
	{
		value: "More than $200",
		checked: false,
		key: uniqueId("pf-"),
		query: [[200, ">"]],
	},
];

const Filter = ({ title = false, filters = [], currentPage, setProducts }) => {
	const [filterOptions, setFilterOptions] = useState({
		category: [],
		price: filterPriceRangeOptions,
	});

	const [filterEl, setFilterEl] = useState({
		category: [],
		price: [],
	});

	useEffect(() => {
		let filterOptions = filters.map((filter) => ({
			value: filter,
			key: uniqueId("cf-"),
			checked: false,
		}));
		setFilterOptions((prevState) => ({
			category: filterOptions,
			price: prevState.price,
		}));
	}, [filters]);

	const filterProduct = async (filterArr) => {
		let filteredProducts = [];
		let products = await getFilteredProducts(currentPage, filterArr);
		products.forEach((product) => {
			product.docs.forEach((doc) => {
				filteredProducts.push(doc.data());
			});
		});
		console.log(filteredProducts);
		setProducts(filteredProducts);
	};

	const handleCheckboxClick = (section) => (e) => {
		let filters;
		let checked = e.target.checked;
		let id = e.target.id;

		let optionsArr = filterOptions[section];

		let targetDataKey = optionsArr.filter((el) => el.value === id)[0]?.key;

		let options = optionsArr.map((el) => {
			if (el.key === targetDataKey) {
				el.checked = checked;
			}

			return el;
		});

		switch (section) {
			case "category":
				setFilterOptions((prevState) => ({
					category: options,
					price: prevState.price,
				}));

				if (checked) {
					setFilterEl((filterEl) => ({
						category: [...filterEl?.category, id],
						price: [...filterEl.price],
					}));

					filters = {
						category: [...filterEl?.category, id],
						price: [...filterEl.price],
					};
				} else {
					setFilterEl((filterEl) => ({
						category: filterEl?.category.filter((el) => el !== id),
						price: [...filterEl.price],
					}));

					filters = {
						category: filterEl?.category.filter((el) => el !== id),
						price: [...filterEl.price],
					};
				}
				break;
			default:
				break;
		}

		console.log(filters);
		filterProduct(filters);
	};

	const handleRadioClick = (section) => (e) => {
		let filters;
		let id = e.target.id;
		let checked = e.target.checked;

		let targetDataKey = filterOptions[section].filter(
			(el) => el.value === id
		)[0]?.key;

		let options = filterOptions[section].map((el) => {
			if (el.key === targetDataKey) {
				el.checked = checked;
			} else {
				el.checked = false;
			}

			return el;
		});

		switch (section) {
			case "price":
				setFilterOptions((filterOptions) => ({
					category: filterOptions.category,
					price: options,
				}));

				setFilterEl((filterEl) => ({
					category: filterEl?.category,
					price: filterPriceRangeOptions.filter((el) => el.value === id),
				}));

				filters = {
					category: filterEl?.category,
					price: filterPriceRangeOptions.filter((el) => el.value === id),
				};
				break;
			default:
				break;
		}

		filterProduct(filters);
	};

	return (
		<Block width="25%">
			<Block>
				{title && <H1>{title}</H1>}
				{filterOptions?.category?.map((filter) => (
					<Checkbox
						key={filter.key}
						value={filter.value}
						checked={filter.checked}
						onChange={handleCheckboxClick("category")}
					/>
				))}
			</Block>
			<Block margin="50px 0 0 0">
				{<H1>Price range</H1>}
				{filterOptions?.price?.map((filter) => (
					<RadioButton
						name="price"
						value={filter.value}
						checked={filter.checked}
						key={filter.key}
						onChange={handleRadioClick("price")}
					/>
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
