import { RouteProps } from 'react-router-dom'
import MainPage from 'pages/MainPage/ui/MainPage'
import MoviePage from 'pages/MoviePage/ui/MoviePage'
import RandomMoviePage from 'pages/RandomMoviePage/ui/RandomMoviePage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
  MAIN = 'main',
  MOVIE = 'movie',
  RANDOM_MOVIE = 'random_movie',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MOVIE]: '/movie/',
  [AppRoutes.RANDOM_MOVIE]: '/random_movie',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
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
}
