import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvaider'
import {
  getMoviesPageIsLoading,
  getMoviesPageNum,
} from '../../selectors/moviesPageSelector'
import { moviesPageActions } from '../../slice/moviesPageSlice'
import { fetchMoviesList } from '../fetchMoviesList/fetchMoviesList'

export const fetchNextMoviesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('moviesPage/fetchNextMoviesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const page = getMoviesPageNum(getState())
  const isLoading = getMoviesPageIsLoading(getState())

  if (!isLoading) {
    dispatch(moviesPageActions.setPage(page + 1))
    dispatch(fetchMoviesList({}))
  }
})
