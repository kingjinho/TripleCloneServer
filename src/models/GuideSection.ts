export default interface GuideSections {
	sectionName: string;
	item: Array<{
		title: string;
		subtitle: string;
		content: string;
		image: Array<string>;
	}>;
};
