import { RouteConfig } from 'routes/routes';

import {
  MAIN_ROUTE,
  MAIN_ROUTE_CHILDREN1,
  MAIN_ROUTE_CHILDREN1_CH1,
  MAIN_ROUTE_CHILDREN1_CH2,
  MAIN_ROUTE_CHILDREN2,
} from './list';
import { ACTIONS } from 'constants/actions';
import { MainPage } from 'pages/Main';
import { MainChildren } from 'containers/mainChildren';

export const mainRoutes: RouteConfig[] = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
    roles: [ACTIONS.MAIN],
    children: [
      {
        path: MAIN_ROUTE_CHILDREN1,
        //todo
        element: <MainChildren />,
        roles: [ACTIONS.MAINCHILDREN1],
        children: [
          {
            path: MAIN_ROUTE_CHILDREN1_CH1,
            element: <div>child 111111111</div>,
            roles: [ACTIONS.MAINCHILDREN1],
          },
          {
            path: MAIN_ROUTE_CHILDREN1_CH2,
            element: <div>child 22222222222</div>,
            roles: [ACTIONS.MAINCHILDREN3],
          },
        ],
      },
      {
        path: MAIN_ROUTE_CHILDREN2,
        element: <div>MAINCHILDREN2</div>,
        roles: [ACTIONS.MAINCHILDREN2],
      },
    ],
  },
];
