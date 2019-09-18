export default interface Hotel {
	type: string;
	description: string;
	ratings: number;
	stars: number;
	cntSaved: number;
	priceOriginal: number;
	priceDiscount: number;
	taxIncluded: boolean;
	image: Array<string>;
};
