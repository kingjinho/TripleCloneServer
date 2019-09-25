export default class GuideSections {
	sectionName?: string;
	items?: Array<{
		title: string;
		subtitle: string;
		content: string;
		cntSaved: number;
		images: Array<string>;
	}>;

	constructor() {}
}
