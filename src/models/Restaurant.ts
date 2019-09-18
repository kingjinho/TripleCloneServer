export default interface Restaurant {
	type: string;
	title: string;
	description: string;
	cntSaved: number;
	ratings: number;
	context: string;
	image: Array<string>;
};
