import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { movieReducer } from 'entities/Movie/model/slice/movieSlice'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'
import { scrollSaveReducer } from 'features/ScrollSave'
import { searchHistoryReducer } from 'features/SearchHistory'
import { moviesPageReducer } from 'pages/MoviesPage/model/slice/moviesPageSlice'
import { movieApi, authApi } from 'shared/api/api'
import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    movie: movieReducer,
    moviesPage: moviesPageReducer,
    user: userReducer,
    loginForm: loginReducer,
    scrollSave: scrollSaveReducer,
    searchHistory: searchHistoryReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            movieApi,
            authApi,
          },
        },
      }),
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
