import { RouteConfig } from 'routes/routes';

import { MENU_ROUTE } from './list';
import { MenuPage } from 'pages/Menu';
import { ACTIONS } from 'constants/actions';

export const menuRoutes: RouteConfig[] = [
  {
    path: MENU_ROUTE,
    element: <MenuPage />,
    roles: [ACTIONS.MENU],
  },
];
