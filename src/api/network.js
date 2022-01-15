import api from "api/firebase";

export function getProductsById(id) {
	return api.collection("products").doc(id).get();
}

export function getAllProducts() {
	return api.collection("products").get();
}

export function getAllProductsCount() {
	return api
		.collection("products")
		.get()
		.then((snapshot) => snapshot.size);
}

export function getProductsAfterLastDoc(pageNum) {
	return api
		.collection("products")
		.orderBy("id", "asc")
		.startAt((pageNum - 1) * 6 + 1)
		.limit(6)
		.get();
}
