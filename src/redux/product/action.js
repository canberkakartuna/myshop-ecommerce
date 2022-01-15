export const SET_PRODUCT = "SET_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_ALL_PRODUCTS_COUNT = "SET_ALL_PRODUCTS_COUNT";

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
