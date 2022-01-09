import { SET_PRODUCT, SET_PRODUCTS } from "./action";

const INITIAL_STATE = {
	product: {},
	products: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_PRODUCT:
			return { ...state, product: action.payload };
		case SET_PRODUCTS:
			return { ...state, products: action.payload };
		default:
			return state;
	}
};

export default productReducer;
