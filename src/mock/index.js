import Dog from "assets/images/dog.png";

export const products = [
	{
		name: "Samurai King Restling",
		category: "landmarks",
		price: 101,
		currency: "USD",
		image: {
			src: Dog,
			alt: "Dog Image",
		},
		bestseller: false,
		featured: true,
		details: {
			dimmentions: {
				width: 1020,
				height: 1020,
			},
			size: 15000,
			description: `
        So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder 
        text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
      `,
			recommendations: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
	},
	{
		name: "Red Bench",
		category: "people",
		price: 3.89,
		currency: "USD",
		image: {
			src: Dog,
			alt: "Dog Image",
		},
		bestseller: true,
		featured: false,
		details: null,
	},
	{
		name: "Egg Balloon",
		category: "food",
		price: 93.89,
		currency: "USD",
		image: "",
		bestseller: false,
		featured: false,
		details: null,
	},
	{
		name: "Man",
		category: "people",
		price: 100,
		currency: "USD",
		image: {
			src: "",
			alt: "",
		},
		bestseller: false,
		featured: false,
		details: null,
	},
	{
		name: "Architecture",
		category: "landmarks",
		price: 101,
		currency: "USD",
		dimmentions: {
			width: 1020,
			height: 1020,
		},
		image: "",
		bestseller: false,
		featured: false,
		details: null,
	},
];
