export default class Summary {
	exchangeRate?: number;
	timeDifference?: number;
	travelTime?: number;
	visa?: {
		isNeeded: boolean;
		info: string;
	};
	voltage?: string;
	language?: string;
	constructor() {}
}
