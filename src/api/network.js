import api from "api/firebase";

export function getProductsById(id) {
	return api.collection("products").doc(id).get();
}

export function getAllProducts() {
	return api.collection("products").get();
}
