import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchMovieById } from '../services/fetchMovieById/fetchMovieById'
import { MovieType } from '../types/movie'
import { MovieSchema } from '../types/movieSchema'

const initialState: MovieSchema = {
  isLoading: true,
  error: undefined,
  data: undefined,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchMovieById.fulfilled,
        (state, action: PayloadAction<MovieType>) => {
          state.isLoading = false
          state.data = action.payload
        }
      )
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: movieActions } = movieSlice
export const { reducer: movieReducer } = movieSlice
