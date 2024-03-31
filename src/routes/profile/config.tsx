import { RouteConfig } from 'routes/routes';

import { ACTIONS } from 'constants/actions';
import { PROFILE_ROUTE } from './list';
import { ProfilePage } from 'pages/Profile';

export const profileRoutes: RouteConfig[] = [
  {
    path: PROFILE_ROUTE,
    element: <ProfilePage />,
    roles: [ACTIONS.PROFILE],
  },
];
