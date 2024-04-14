import { StateSchema } from 'app/providers/StoreProvaider'

export const getMoviesPageIsLoading = (state: StateSchema) =>
  state.moviesPage?.isLoading
export const getMoviesPageError = (state: StateSchema) =>
  state.moviesPage?.error
export const getMoviesPageNum = (state: StateSchema) =>
  state.moviesPage?.page || 1
export const getMoviesPageLimit = (state: StateSchema) =>
  state.moviesPage?.limit || 10
export const getMoviesPageYear = (state: StateSchema) =>
  state.moviesPage?.sortYear ?? ''
export const getMoviesPageAge = (state: StateSchema) =>
  state.moviesPage?.sortAge ?? ''
export const getMoviesPageCountry = (state: StateSchema) =>
  state.moviesPage?.sortCountry ?? ''
export const getMoviesPageSearch = (state: StateSchema) =>
  state.moviesPage?.search ?? ''
export const getMoviesPageInited = (state: StateSchema) =>
  state.moviesPage?._inited
