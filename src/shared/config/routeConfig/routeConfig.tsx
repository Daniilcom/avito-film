import { RouteProps } from 'react-router-dom';
import MoviesPage from 'pages/MoviesPage/ui/MoviesPage';
import MoviePage from 'pages/MoviePage/ui/MoviePage';
import RandomMoviePage from 'pages/RandomMoviePage/ui/RandomMoviePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MOVIES = 'movies',
  MOVIE = 'movie',
  RANDOM_MOVIE = 'random_movie',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MOVIES]: '/',
    [AppRoutes.MOVIE]: '/movie/',
    [AppRoutes.RANDOM_MOVIE]: '/random_movie',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MOVIES]: {
        path: RoutePath.movies,
        element: <MoviesPage />,
    },
    [AppRoutes.MOVIE]: {
        path: `${RoutePath.movie}:id`,
        element: <MoviePage />,
    },
    [AppRoutes.RANDOM_MOVIE]: {
        path: RoutePath.random_movie,
        element: <RandomMoviePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
