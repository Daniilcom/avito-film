import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvaider'
import { MovieType } from '../../types/movie'

export const fetchMovieById = createAsyncThunk<
  MovieType,
  string | undefined,
  ThunkConfig<string>
>('movie/fetchMovieById', async (movieId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  if (!movieId) {
    throw new Error('')
  }

  try {
    const res = await extra.movieApi.get<MovieType>(`/movie/${movieId}`)
    console.log(res.data)

    if (!res.data) {
      throw new Error()
    }
    return res.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
