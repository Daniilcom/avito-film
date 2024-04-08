import MainPage from 'pages/MainPage/ui/MainPage';
import RandomFilmPage from 'pages/RandomFilmPage/ui/RandomFilmPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  RANDOM = 'random',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.RANDOM]: '/random',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.RANDOM]: {
        path: RoutePath.random,
        element: <RandomFilmPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
