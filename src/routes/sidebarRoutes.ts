/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from '@/constants/routePath.constant';
import overview from '@/assets/icon/overview1.svg?react';
import company from '@/assets/icon/company.svg?react';
import seting from '@/assets/icon/seting.svg?react';

export const sidebarRoutes = [
	{
		path: ROUTE_PATH.ROOT.INDEX,
		name: 'Tổng quan',
		label: 'Dashboard',
		icon: overview,
		children: []
	},
	{
		path: ROUTE_PATH.BOOKS.INDEX,
		name: 'Quản lý sách',
		label: 'Books',
		icon: company,
		children: []
	},
	{
		path: ROUTE_PATH.ORDERS.LIST,
		name: 'Quản lý đơn hàng',
		label: 'Orders',
		icon: company,
		children: []
	},
	{
		path: ROUTE_PATH.CATEGORIES.INDEX,
		name: 'Quản lý danh mục',
		label: 'Categories',
		icon: company,
		children: []
	},
	{
		path: ROUTE_PATH.CUSTOMER.INDEX,
		name: 'Quản lý khách hàng',
		label: 'Customers',
		icon: company,
		children: []
	},
	{
		path: ROUTE_PATH.SETTING.INDEX,
		name: 'Cài đặt',
		label: 'setting',
		icon: seting,
		children: []
	}
];
