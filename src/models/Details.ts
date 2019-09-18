import Hotel from './Hotel';
import Summary from './Summary';
import Guide from './Guide';
import Tour from './Tour';
import Restaurant from './Restaurant';
import { Link } from './Link';

export default interface Detail {
	summary: Summary;
	guide: Guide;
	hotel: Array<Hotel>;
	tour: Array<Tour>;
	restaurant: Array<Restaurant>;
	externalLink: Array<Link>;
};
