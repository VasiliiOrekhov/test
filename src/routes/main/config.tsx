import { RouteConfig } from 'routes/routes';

import { MAIN_ROUTE, MAIN_ROUTE_MENU } from './list';
import { ACTIONS } from 'constants/actions';
import { MainPage } from 'pages/Main';

export const mainRoutes: RouteConfig[] = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
    roles: [ACTIONS.MAIN],
    children: [
      {
        path: MAIN_ROUTE_MENU,
        element: <div>menccccccccccu</div>,
      },
    ],
  },
];
