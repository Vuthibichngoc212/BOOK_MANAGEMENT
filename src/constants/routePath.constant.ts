export const ROUTE_PATH = {
	ROOT: {
		INDEX: '/'
	},
	HOME: {
		INDEX: '/dashboard'
	},
	AUTH: {
		LOGIN: '/login'
	},
	HOMEPAGE: {
		INDEX: '/homepage'
	},
	ORDERS: {
		INDEX: '/orders',
		LIST: '/orders',
		DETAIL: '/orders/:id'
	},
	BOOKS: {
		INDEX: '/books',
		LIST: '/books',
		DETAIL: '/books/:id'
	},
	CATEGORIES: {
		INDEX: '/categories'
	},
	CUSTOMER: {
		INDEX: '/customers',
		LIST: '/customers',
		DETAIL: '/customers/:id'
	},
	PROFILE: {
		INDEX: '/profile'
	},
	SETTING: {
		INDEX: '/settings'
	},

	NOTFOUND: {
		INDEX: '*'
	},
	FORBIDDEN: '/403'
};
