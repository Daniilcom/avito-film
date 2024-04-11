import { NavigateOptions, To } from 'react-router-dom'
import { AxiosInstance } from 'axios'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { MovieSchema } from 'entities/Movie'

export interface StateSchema {
  user: UserSchema
  loginForm?: LoginSchema
  movie?: MovieSchema
}

export interface ThunkExtraArg {
  movieApi: AxiosInstance
  authApi: AxiosInstance
  navigate: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
