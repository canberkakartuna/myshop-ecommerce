export const SET_PRODUCT = "SET_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";

export const setProduct = (product) => ({
	type: SET_PRODUCT,
	payload: product,
});

export const setProducts = (products) => ({
	type: SET_PRODUCTS,
	payload: products,
});
