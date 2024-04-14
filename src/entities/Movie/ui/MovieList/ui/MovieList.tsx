import { MovieType } from 'entities/Movie/model/types/movie'
import { classNames } from 'shared/lib/classNames/classNames'
import { ConditionalRender } from 'shared/ui/ConditionalRender/ui/ConditionalRender'
import { MovieItem } from '../../MovieItem'
import cls from './MovieList.module.scss'

interface MovieListProps {
  className?: string
  movies: MovieType[] | []
  isLoading?: boolean
}

export const MovieList = (props: MovieListProps) => {
  const { className, movies, isLoading } = props

  const renderMovie = (movie: MovieType) => (
    <ConditionalRender data={movie.poster.url} key={movie.id} visible>
      <MovieItem
        key={movie.id}
        id={movie.id}
        name={movie.name}
        className={cls.card}
        poster={movie.poster.url}
        year={`${movie.year}`}
      />
    </ConditionalRender>
  )

  return (
    <div className={classNames(cls.MovieList, {}, [className])}>
      {movies.length > 0 ? movies.map(renderMovie) : null}
    </div>
  )
}
