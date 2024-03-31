import { ACTIONS } from 'constants/actions';
import { Navigate, RouteObject } from 'react-router-dom';
import { LOGIN_ROUTE } from './login/list';
import { loginRoutes } from './login/config';
import { menuRoutes } from './menu/config';
import { mainRoutes } from './main/config';
import { profileRoutes } from './profile/config';

export type RouteConfig = RouteObject & {
  children?: RouteConfig[];
  roles?: ACTIONS[];
};

export const UNKNOWN_ROUTE = '*';
export const NO_PERMISSION_ROUTE = '/403';
export const HOME_NONE_AUTH_ROUTE = LOGIN_ROUTE;

export const ERROR_NONE_AUTH_ROUTE = '/error';

export const initRoutes = (isAuth: boolean, roles?: string[]) => {
  if (isAuth) {
    const routes: RouteObject[] = [];
    const userHasNecessaryRole = (item: RouteConfig): boolean => {
      return !!item.roles?.some((role: ACTIONS) => {
        console.log(role, roles);
        return roles?.includes(role);
      });
    };

    const initConfigRoutes = (elements: RouteConfig[]) => {
      elements.forEach((item: RouteConfig) => {
        const userHasRights = userHasNecessaryRole(item);
        const routeDoesntRequireAnyRights = !item.roles;

        const userCanAccessRoute = userHasRights || routeDoesntRequireAnyRights;

        if (userCanAccessRoute) {
          const filteredChildren = item.children?.filter((child: RouteConfig) => {
            const childHasRights = userHasNecessaryRole(child);
            const childDoesntRequireAnyRights = !child.roles;

            return childHasRights || childDoesntRequireAnyRights;
          });

          routes.push({ path: item.path, children: filteredChildren, element: item.element });
        }
      });
    };

    initConfigRoutes([...loginRoutes, ...menuRoutes, ...mainRoutes, ...profileRoutes]);

    routes.push({
      path: UNKNOWN_ROUTE,
      element: <Navigate replace to={routes?.[0]?.path ?? NO_PERMISSION_ROUTE} />,
    });
    // routes.push({ path: ERROR_NONE_AUTH_ROUTE, element: <Error /> });
    // routes.push({ path: NO_PERMISSION_ROUTE, element: <NoPermission /> });
    console.log('withLoginRoute', routes);
    return routes;
  }
  const test = [
    { path: UNKNOWN_ROUTE, element: <Navigate replace to={HOME_NONE_AUTH_ROUTE} /> },
    // { path: ERROR_NONE_AUTH_ROUTE, element: <Error /> },
    ...loginRoutes,
  ];
  console.log('noLoginRoute', test);
  return [
    { path: UNKNOWN_ROUTE, element: <Navigate replace to={HOME_NONE_AUTH_ROUTE} /> },
    // { path: ERROR_NONE_AUTH_ROUTE, element: <Error /> },
    ...loginRoutes,
  ];
};
