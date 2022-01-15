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

export function getFilteredProducts(pageNum, filterQuery = {}) {
	const queries = [];

	if (filterQuery?.category?.length > 0 || filterQuery?.price?.length > 0) {
		if (filterQuery?.category?.length > 0) {
			filterQuery?.category?.forEach((elem) => {
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
		}

		if (filterQuery?.price?.length > 0) {
			filterQuery?.price?.forEach((elem) => {
				if (elem.query.length > 1) {
					queries.push(
						api
							.collection("products")
							.orderBy("price", "asc")
							.startAt((pageNum - 1) * 6 + 1)
							.limit(6)
							.where("price", elem.query[0][1], elem.query[0][0])
							.where("price", elem.query[1][1], elem.query[1][0])
							.get()
					);
				} else {
					queries.push(
						api
							.collection("products")
							.orderBy("price", "asc")
							.startAt((pageNum - 1) * 6 + 1)
							.limit(6)
							.where("price", elem.query[0][1], elem.query[0][0])
							.get()
					);
				}
			});
		}
		console.log(queries);
		return Promise.all(queries);
	}
	return Promise.all([getProductsByPageNumber(pageNum)]);
}
