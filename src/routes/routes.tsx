import Auth from '@/pages/Auth';
import ProtectedLayout from '@/components/layout/ProtectedLayout/ProtectedLayout';
import HomePage from '@/pages/Home/screens/HomePage';
import { ROUTE_PATH } from '@/constants/routePath.constant';
import { About } from '@/pages/About';

const routes = [
	{
		label: 'Home',
		path: ROUTE_PATH.ROOT.INDEX,
		element: <ProtectedLayout />,
		children: [
			{
				path: '',
				element: <About />
			}
		]
	},
	{
		label: 'Home Page',
		path: ROUTE_PATH.HOMEPAGE.INDEX,
		element: <HomePage />
	},
	{
		path: ROUTE_PATH.AUTH.LOGIN,
		element: <Auth />
	}
];

export default routes;
