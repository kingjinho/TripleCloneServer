export default interface Summary {
	weather: Array<number>;
	exchangeRate: number;
	timeDifference: number;
	travelTime: number;
	visa: {
		isNeeded: boolean;
		info: string;
	};
	voltage: string;
	language: string;
};
