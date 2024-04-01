import { FC, ReactElement } from 'react';

import { Outlet, Route, Routes } from 'react-router-dom';
import { RouteConfig, initRoutes } from 'routes/routes';
import { ACTIONS } from 'constants/actions';

export const renderRoutes = ({
  path,
  element,
  children = undefined,
  id = '',
}: RouteConfig): ReactElement => {
  const routes = children?.map(renderRoutes);

  return (
    <Route path={path} element={element} key={`route__${path}__${id}`}>
      {routes}
    </Route>
  );
};

export const Pages: FC = () => {
  //TODO запрос экшн
  // const { isAuthenticated, user } = useAuth();
  const isAuthenticated = true;
  const roles = [
    ACTIONS.PROFILE,
    ACTIONS.MAIN,
    ACTIONS.MAINCHILDREN1,
    ACTIONS.MAINCHILDREN2,
    ACTIONS.MENU,
  ];
  const routes = initRoutes(true, roles as ACTIONS[]).map(renderRoutes);
  console.log(routes);

  if (isAuthenticated) {
    return (
      <Routes>
        <Route element={<Outlet />}>{routes}</Route>
      </Routes>
    );
  }

  return <Routes>{routes}</Routes>;
};
