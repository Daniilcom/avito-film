import {
  createEntityAdapter,
  createSlice,
  EntityId,
  PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvaider'
import { MovieType } from 'entities/Movie'
import { MoviesPageSchema } from '../types/moviesPageSchema'
import { fetchMoviesList } from '../service/fetchMoviesList/fetchMoviesList'

const moviesAdapter = createEntityAdapter<MovieType, EntityId>({
  selectId: (movie) => movie.id,
})

export const getMovies = moviesAdapter.getSelectors<StateSchema>(
  (state) => state.moviesPage || moviesAdapter.getInitialState()
)

const moviesPageSlice = createSlice({
  name: 'moviesPageSlice',
  initialState: moviesAdapter.getInitialState<MoviesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    _inited: false,
    sortYear: '',
    sortAge: '',
    sortCountry: '',
    search: '',
  }),
  reducers: {
    initState: (state) => {
      state.limit = 10
      state._inited = true
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setSortYear: (state, action: PayloadAction<string>) => {
      state.sortYear = action.payload
    },
    setSortAge: (state, action: PayloadAction<string>) => {
      state.sortAge = action.payload
    },
    setSortCountry: (state, action: PayloadAction<string>) => {
      state.sortCountry = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesList.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true

        if (action.meta.arg.replace) {
          moviesAdapter.removeAll(state)
        }
      })
      .addCase(fetchMoviesList.fulfilled, (state, action) => {
        state.isLoading = false

        if (action.meta.arg.replace) {
          moviesAdapter.setAll(state, action.payload)
        } else {
          moviesAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchMoviesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: moviesPageReducer, actions: moviesPageActions } =
  moviesPageSlice
