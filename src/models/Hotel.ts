export default class Hotel {
	private title?: string;
	private description?: string;
	private ratings?: number;
	private stars?: number;
	private cntSaved?: number;
	private priceOriginal?: number;
	private priceDiscount?: number;
	private discountRate?: number;
	private taxIncluded?: boolean;
	private images?: Array<string>;

	constructor() {}

	setTitle(title: string) {
		this.title = title;
	}

	setDescription(desription: string) {
		this.description = desription;
	}

	setRatings(ratings: number) {
		this.ratings = ratings;
	}

	setStars(stars: number) {
		this.stars = stars;
	}

	setCntSaved(cntSaved: number) {
		this.cntSaved = cntSaved;
	}

	setOriginalPrice(priceOriginal: number) {
		this.priceOriginal = priceOriginal;
	}
	setDiscountRate(discountRate: number) {
		this.discountRate = discountRate;
	}

	setTaxIncluded(isIncluded: boolean) {
		this.taxIncluded = isIncluded;
	}

	setImages(images: Array<string>) {
		this.images = images;
	}

	getTitle() {
		return this.title;
	}

	getDescription() {
		return this.description;
	}

	getRatings() {
		return this.ratings;
	}

	getStars() {
		return this.stars;
	}

	getCntSaved() {
		return this.cntSaved;
	}

	getOriginalPrice() {
		return this.priceOriginal;
	}
	getDiscountRate() {
		return this.discountRate;
	}

	getTaxIncluded() {
		return this.taxIncluded;
	}

	getImages() {
		return this.images;
	}
}
