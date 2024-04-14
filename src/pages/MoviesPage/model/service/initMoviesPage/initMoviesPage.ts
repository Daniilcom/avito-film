import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvaider'
import { getMoviesPageInited } from '../../selectors/moviesPageSelector'
import { moviesPageActions } from '../../slice/moviesPageSlice'
import { fetchMoviesList } from '../fetchMoviesList/fetchMoviesList'

export const initMoviesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('moviesPage/initMoviesPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const inited = getMoviesPageInited(getState())

  if (!inited) {
    const countryFormUrl = searchParams.get('country')
    const yearFormUrl = searchParams.get('year')
    const ageFormUrl = searchParams.get('age')
    const searchFormUrl = searchParams.get('search')

    if (countryFormUrl) {
      dispatch(moviesPageActions.setSortCountry(countryFormUrl))
    }
    if (yearFormUrl) {
      dispatch(moviesPageActions.setSortYear(yearFormUrl))
    }
    if (ageFormUrl) {
      dispatch(moviesPageActions.setSortAge(ageFormUrl))
    }
    if (searchFormUrl) {
      dispatch(moviesPageActions.setSearch(searchFormUrl))
    }

    dispatch(moviesPageActions.initState())
    dispatch(fetchMoviesList({}))
  }
})
