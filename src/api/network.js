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
	if (filterQuery.category.length === 0 && filterQuery.price.length === 0) {
		return Promise.all([getProductsByPageNumber(pageNum)]);
	}

	let queries = [];

	const priceFilter = filterQuery?.price?.[0]?.query || [];
	const categoryFilter = filterQuery?.category;

	if (priceFilter.length > 0 && categoryFilter.length > 0) {
		if (priceFilter.length === 2) {
			categoryFilter.forEach((category) => {
				queries.push(
					api
						.collection("products")
						.orderBy("price", "asc")
						.startAt((pageNum - 1) * 6 + 1)
						.limit(6)
						.where("category", "==", category)
						.where("price", priceFilter[0][1], priceFilter[0][0])
						.where("price", priceFilter[1][1], priceFilter[1][0])
						.get()
				);
			});
		} else if (priceFilter.length === 1) {
			categoryFilter.forEach((category) => {
				queries.push(
					api
						.collection("products")
						.orderBy("price", "asc")
						.startAt((pageNum - 1) * 6 + 1)
						.limit(6)
						.where("category", "==", category)
						.where("price", priceFilter[0][1], priceFilter[0][0])
						.get()
				);
			});
		}
	} else if (priceFilter.length > 0) {
		if (priceFilter.length === 1) {
			queries.push(
				api
					.collection("products")
					.orderBy("price", "asc")
					.startAt((pageNum - 1) * 6 + 1)
					.limit(6)
					.where("price", priceFilter[0][1], priceFilter[0][0])
					.get()
			);
		} else if (priceFilter.length === 2) {
			queries.push(
				api
					.collection("products")
					.orderBy("price", "asc")
					.startAt((pageNum - 1) * 6 + 1)
					.limit(6)
					.where("price", priceFilter[0][1], priceFilter[0][0])
					.where("price", priceFilter[1][1], priceFilter[1][0])
					.get()
			);
		}
	} else if (categoryFilter.length > 0) {
		categoryFilter.forEach((category) => {
			queries.push(
				api
					.collection("products")
					.orderBy("id", "asc")
					.startAt((pageNum - 1) * 6 + 1)
					.limit(6)
					.where("category", "==", category)
					.get()
			);
		});
	}

	return Promise.all(queries);
}
