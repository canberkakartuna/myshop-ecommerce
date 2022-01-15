import api from "api/firebase";

export function getProductsById(id) {
	return api.collection("products").doc(id).get();
}

export function getAllProducts() {
	return api.collection("products").get();
}

export function getProductsByPageNumber(pageNum) {
	return api
		.collection("products")
		.orderBy("id", "asc")
		.startAt((pageNum - 1) * 6 + 1)
		.limit(6)
		.get();
}

export function getFilteredProducts(pageNum, filterQuery = []) {
	const queries = [];

	if (filterQuery.length > 0) {
		filterQuery.forEach((elem) => {
			queries.push(
				api
					.collection("products")
					.orderBy("id", "asc")
					.startAt((pageNum - 1) * 6 + 1)
					.limit(6)
					.where("category", "==", elem)
					.get()
			);
		});

		return Promise.all(queries);
	}
	return Promise.all([getProductsByPageNumber(pageNum)]);
}
