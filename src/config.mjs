export const SITE = {
	name: 'AstroWind',

	origin: 'https://reckoning.dev',
	basePathname: '/',
	trailingSlash: false,

	title: 'reckoning.dev',
	description: 'Sadanand Singh Blog and Digital Garden',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'Kc5zG0PUs3CNQKoYQND99oy4K8Dpt63JavA1WFy7OXY',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
