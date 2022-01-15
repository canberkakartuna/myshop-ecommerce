export const SET_PRODUCT = "SET_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_ALL_PRODUCTS_COUNT = "SET_ALL_PRODUCTS_COUNT";
export const SET_FILTERS = "SET_FILTERS";

export const setProduct = (product) => ({
	type: SET_PRODUCT,
	payload: product,
});

export const setProducts = (products) => ({
	type: SET_PRODUCTS,
	payload: products,
});

export const setAllProductsCount = (count) => ({
	type: SET_ALL_PRODUCTS_COUNT,
	payload: count,
});

export const setFilters = (filters) => ({
	type: SET_FILTERS,
	payload: filters,
});
