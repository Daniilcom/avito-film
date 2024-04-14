import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvaider'
import { MovieType } from 'entities/Movie'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import {
  getMoviesPageAge,
  getMoviesPageCountry,
  getMoviesPageLimit,
  getMoviesPageNum,
  getMoviesPageSearch,
  getMoviesPageYear,
} from '../../selectors/moviesPageSelector'

interface FetchMoviesListProps {
  replace?: boolean
  docs?: MovieType[]
}

export const fetchMoviesList = createAsyncThunk<
  MovieType[],
  FetchMoviesListProps,
  ThunkConfig<string>
>('moviesPage/fetchMoviesList', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi
  const page = getMoviesPageNum(getState())
  const limit = getMoviesPageLimit(getState())
  const ageRating = getMoviesPageAge(getState())
  const year = getMoviesPageYear(getState())
  const country = getMoviesPageCountry(getState())
  const search = getMoviesPageSearch(getState())

  const baseUrl = search ? '/movie/search' : '/movie'

  const params = {
    page,
    limit,
    ...(ageRating && { ageRating }),
    ...(year && { year }),
    ...(country && { 'countries.name': country }),
    ...(search && { query: search }),
  }

  try {
    addQueryParams({
      ageRating,
      year,
      country,
      search,
    })
    const res = await extra.movieApi.get<FetchMoviesListProps>(baseUrl, {
      params,
    })
    if (!res.data || !res.data.docs) {
      throw new Error('No data received')
    }
    console.log('Data received from API:', res.data.docs)
    return res.data.docs
  } catch (error) {
    console.error(error)
    return rejectWithValue('Failed to fetch movies')
  }
})
