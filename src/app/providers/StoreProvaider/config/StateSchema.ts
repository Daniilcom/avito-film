import { AxiosInstance } from 'axios'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { MovieSchema } from 'entities/Movie'
import { MoviesPageSchema } from 'pages/MoviesPage'
import { ScrollSaveSchema } from 'features/ScrollSave'
import { SearchHistoryState } from 'features/SearchHistory'

export interface StateSchema {
  user: UserSchema
  loginForm?: LoginSchema
  movie?: MovieSchema
  moviesPage?: MoviesPageSchema
  scrollSave?: ScrollSaveSchema
  searchHistory?: SearchHistoryState
}

export interface ThunkExtraArg {
  movieApi: AxiosInstance
  authApi: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
