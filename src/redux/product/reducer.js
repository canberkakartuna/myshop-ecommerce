import {
	SET_PRODUCT,
	SET_PRODUCTS,
	SET_ALL_PRODUCTS_COUNT,
	SET_FILTERS,
} from "./action";

const INITIAL_STATE = {
	product: {},
	products: [],
	allProductsCount: 0,
	filters: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_PRODUCT:
			return { ...state, product: action.payload };
		case SET_PRODUCTS:
			return { ...state, products: action.payload };
		case SET_ALL_PRODUCTS_COUNT:
			return { ...state, allProductsCount: action.payload };
		case SET_FILTERS:
			return { ...state, filters: action.payload };
		default:
			return state;
	}
};

export default productReducer;
