import MainPage from 'pages/MainPage/ui/MainPage';
import RandomFilmPage from 'pages/RandomFilmPage/ui/RandomFilmPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  RANDOM = 'random',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.RANDOM]: '/random',
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
};
