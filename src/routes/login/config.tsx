import { Login } from 'pages/Login';
import { RouteConfig } from '../routes';
import { LOGIN_ROUTE } from './list';

export const loginRoutes: RouteConfig[] = [
  {
    path: LOGIN_ROUTE,
    element: <Login />,
  },
];
