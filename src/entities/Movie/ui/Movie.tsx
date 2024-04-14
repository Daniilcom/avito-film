import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { ConditionalRender } from 'shared/ui/ConditionalRender/ui/ConditionalRender'
import { Placeholder } from 'shared/ui/Placeholder/Placeholder'
import {
  getMovieData,
  getMovieError,
  getMovieIsLoading,
} from '../model/selectors/movie'
import { fetchMovieById } from '../model/services/fetchMovieById/fetchMovieById'
import cls from './Movie.module.scss'
import { MovieAbout } from './MovieAbout'
import { MovieCarousel } from './MovieCarousel'

interface MovieProps {
  className?: string
  id: string
}

export const Movie = memo((props: MovieProps) => {
  const { className, id } = props
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getMovieIsLoading)
  const movie = useSelector(getMovieData)
  const error = useSelector(getMovieError)

  const sequelsAndPrequels =
    movie?.sequelsAndPrequels?.map((i) => ({
      id: i.id,
      name: i.name,
      poster: i.poster.url,
      year: `${i.year}`,
    })) || []

  const actors = movie?.persons
    .filter((i) => i.profession === 'актеры')
    .map((i) => ({
      id: i.id,
      name: i.name,
      photo: i.photo,
    }))

  const similarMovies = movie?.similarMovies.map((i) => ({
    id: i.id,
    name: i.name,
    poster: i.poster.url,
    year: `${i.year}`,
  }))

  useEffect(() => {
    dispatch(fetchMovieById(id))
  }, [dispatch, id])

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>error</div>
  }
  return (
    <div className={classNames(cls.Movie, {}, [className])}>
      <MovieAbout />
      <ConditionalRender
        data={movie?.description}
        Placeholder={<Placeholder text="Описание отсутствует" />}
      >
        <Text title="Описание" text={movie?.description} size={TextSize.M} />
      </ConditionalRender>
      <ConditionalRender
        data={actors}
        Placeholder={<Placeholder text="Списка актеров нет" />}
      >
        <MovieCarousel title="В главных ролях" items={actors} />
      </ConditionalRender>
      <ConditionalRender
        data={sequelsAndPrequels}
        Placeholder={<Placeholder text="Списка приквелов и сиквелов нет" />}
      >
        <MovieCarousel items={sequelsAndPrequels} title="Приквелы и сиквелы" />
      </ConditionalRender>
      <ConditionalRender
        data={similarMovies}
        Placeholder={<Placeholder text="Списка похожих фильмов нет" />}
      >
        <MovieCarousel items={similarMovies} title="Похожие фильмы" />
      </ConditionalRender>
    </div>
  )
})
