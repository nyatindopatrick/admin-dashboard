// component's config object.
const components = {
	admin: {
		component: 'AdminOnly',
		url: '/admin-only',
		title: 'Admin Only',
		icon: 'menu',
		module: 1
	},
	users: {
		component: 'Users',
		url: '/users',
		title: 'Users',
		icon: 'menu',
		module: 1
	},
	dashboard: {
		component: 'Dashboard',
		url: '/dashboard',
		title: 'Dashboard',
		icon: 'menu',
		module: 1
	},
	sacco: {
		component: 'Sacco',
		url: '/sacco',
		title: 'Sacco',
		icon: 'menu',
		module: 1
	},
	riders: {
		component: 'Riders',
		url: '/riders',
		title: 'Riders',
		icon: 'menu',
		module: 1
	},
	multistep: {
		component: 'Multistep',
		url: '/multistep',
		title: 'Multistep',
		icon: 'menu',
		module: 1
	},
	sms: {
		component: 'Sms',
		url: '/sms',
		title: 'Sms',
		icon: 'menu',
		module: 1
	}
};

// modules for grouping.
const modules = {
	0: {
		title: 'Dashboard',
		icon: 'home',
		isExpendable: true
	}
};

// component's access to roles.
const { dashboard, sacco, riders, multistep, sms } = components;
const rolesConfig = {
	admin: {
		routes: [...Object.values(components)]
	},
	sacco: {
		routes: [dashboard, sacco, riders, multistep, sms]
	},
	riders: {
		routes: [multistep, sms]
	},
	common: {
		routes: [
			{
				component: 'Home',
				url: '/',
				title: 'Home',
				icon: 'menu',
				module: 1
			},
			{
				component: 'Profile',
				url: '/profile',
				title: 'Profile',
				icon: 'menu',
				module: 1
			}
		]
	}
};

export { modules, rolesConfig };
