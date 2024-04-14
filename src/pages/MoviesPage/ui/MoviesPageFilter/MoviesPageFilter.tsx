import { MoviesSort } from 'features/MoviesSort'
import {
  getMoviesPageAge,
  getMoviesPageCountry,
  getMoviesPageSearch,
  getMoviesPageYear,
} from 'pages/MoviesPage/model/selectors/moviesPageSelector'
import { fetchMoviesList } from 'pages/MoviesPage/model/service/fetchMoviesList/fetchMoviesList'
import { moviesPageActions } from 'pages/MoviesPage/model/slice/moviesPageSlice'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import cls from './MoviesPageFilter.module.scss'

interface MoviesPageFilterProps {
  className?: string
}

export const MoviesPageFilter = (props: MoviesPageFilterProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const sortAge = useSelector(getMoviesPageAge)
  const sortYear = useSelector(getMoviesPageYear)
  const sortCountry = useSelector(getMoviesPageCountry)
  const search = useSelector(getMoviesPageSearch)

  const fetchData = useCallback(() => {
    dispatch(fetchMoviesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 1000)

  const onChangeAge = useCallback(
    (newAge: string) => {
      dispatch(moviesPageActions.setSortAge(newAge))
      dispatch(moviesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeYear = useCallback(
    (newYear: string) => {
      dispatch(moviesPageActions.setSortYear(newYear))
      dispatch(moviesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeCountry = useCallback(
    (newCountry: string) => {
      dispatch(moviesPageActions.setSortCountry(newCountry))
      dispatch(moviesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(moviesPageActions.setSearch(search))
      dispatch(moviesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData]
  )

  return (
    <div className={classNames(cls.MoviesPageFilter, {}, [className])}>
      <MoviesSort
        sortAge={sortAge}
        sortCountry={sortCountry}
        sortYear={sortYear}
        onChangeAge={onChangeAge}
        onChangeCountry={onChangeCountry}
        onChangeYear={onChangeYear}
        className={cls.sortWrapper}
      />
      <Card className={cls.search}>
        <Input onChange={onChangeSearch} value={search} placeholder="Поиск" />
      </Card>
    </div>
  )
}
