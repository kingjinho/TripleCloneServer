import Hotel from './Hotel';
import Summary from './Summary';
import Guide from './Guide';
import Tour from './Tour';
import Restaurant from './Restaurant';
import Link from './Link';

export default class Details {
	private summary: Summary;
	private guide: Guide;
	private hotel: Array<Hotel>;
	private tour: Array<Tour>;
	private restaurant: Array<Restaurant>;
	private externalLink: Array<Link>;

	constructor() {
		this.summary = new Summary();
		this.guide = new Guide();
		this.hotel = new Array<Hotel>();
		this.tour = new Array<Tour>();
		this.restaurant = new Array<Restaurant>();
		this.externalLink = new Array<Link>();
	}

	getSummary() {
		return this.summary;
	}

	getGuide() {
		return this.guide;
	}

	getHotel() {
		return this.hotel;
	}

	getTour() {
		return this.tour;
	}

	getRestaurant() {
		return this.restaurant;
	}

	getExternalLink() {
		return this.externalLink;
	}
}
