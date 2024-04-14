import { StateSchema } from 'app/providers/StoreProvaider';

export const getMovieData = (state: StateSchema) => state.movie?.data;
export const getMovieIsLoading = (state: StateSchema) => state.movie?.isLoading;
export const getMovieError = (state: StateSchema) => state.movie?.error;
