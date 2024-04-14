import { MovieList } from 'entities/Movie/ui/MovieList/ui/MovieList'
import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'widgetes/Page/Page'
import { getMoviesPageIsLoading } from '../model/selectors/moviesPageSelector'
import { fetchNextMoviesPage } from '../model/service/fetchNextMoviesPage/fetchNextMoviesPage'
import { initMoviesPage } from '../model/service/initMoviesPage/initMoviesPage'
import { getMovies } from '../model/slice/moviesPageSlice'
import { MoviesPageFilter } from './MoviesPageFilter/MoviesPageFilter'

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MoviesPage.module.scss'

interface MoviesPageProps {
  className?: string
}

const MoviesPage = ({ className }: MoviesPageProps) => {
  const dispatch = useAppDispatch()
  const movies = useSelector(getMovies.selectAll)
  const isLoading = useSelector(getMoviesPageIsLoading)
  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextMoviesPage())
  }, [dispatch])

  useEffect(() => {
    dispatch(initMoviesPage(searchParams))
  }, [dispatch])

  return (
    <Page
      onScrollEnd={onLoadNextPart}
      className={classNames(cls.MoviesPage, {}, [className])}
    >
      <MoviesPageFilter />
      <MovieList isLoading={isLoading} movies={movies} className={cls.list} />
    </Page>
  )
}

export default memo(MoviesPage)
