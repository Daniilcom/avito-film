import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { movieReducer } from 'entities/Movie/model/slice/movieSlice'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'
import { NavigateOptions, To } from 'react-router-dom'
import { movieApi, authApi } from 'shared/api/api'
import { StateSchema } from './StateSchema'

export function createReduxStore(
  navigate?: (to: To, options?: NavigateOptions) => void,
  initialState?: StateSchema
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    movie: movieReducer,
    user: userReducer,
    loginForm: loginReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            movieApi: movieApi,
            authApi: authApi,
            navigate,
          },
        },
      }),
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
