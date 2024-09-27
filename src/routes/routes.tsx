import Auth from '@/pages/Auth';
import ProtectedLayout from '@/components/layout/ProtectedLayout/ProtectedLayout';
import HomePage from '@/pages/Home/screens/HomePage';
import { ROUTE_PATH } from '@/constants/routePath.constant';
import Dashboard from '@/pages/Dashboard/screens/Dashboard';
import BookManagements from '@/pages/books-management/screens/BookManagements';
import Orders from '@/pages/odders/screens/Orders';

const routes = [
	{
		path: ROUTE_PATH.ROOT.INDEX,
		element: <Auth />
	},
	{
		label: 'Home Page',
		path: ROUTE_PATH.HOMEPAGE.INDEX,
		element: <HomePage />
	},
	{
		label: 'Home',
		path: ROUTE_PATH.HOME.INDEX,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.HOME.INDEX,
				element: <Dashboard />
			}
		]
	},
	{
		label: 'Books',
		path: ROUTE_PATH.BOOKS.INDEX,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.BOOKS.INDEX,
				element: <BookManagements />
			}
		]
	},
	{
		label: 'ORDERS',
		path: ROUTE_PATH.ORDERS.INDEX,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.ORDERS.INDEX,
				element: <Orders />
			}
		]
	}
];

export default routes;
