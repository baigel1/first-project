export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export default interface HelpArticle {
	body?: string,
	externalArticlePostDate?: string,
	externalArticleUpdateDate?: string,
	landingPageUrl?: string,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	promoted?: boolean,
	shortDescription?: string,
	slug?: string,
	voteCount?: number,
	voteSum?: number,
	name: string,
	c_photo?: Image,
	keywords?: string[],
	id: string,
	timezone?: any,
}
