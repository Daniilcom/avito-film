import { useSelector } from 'react-redux'
import { getMovieData } from '../../../model/selectors/movie'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MovieSeason.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Carousel } from 'shared/ui/Carousel'
import { MovieItem } from '../../MovieItem'

interface MovieSeasonProps {
  className?: string
}

export const MovieSeason = (props: MovieSeasonProps) => {
  const { className } = props
  const movies = useSelector(getMovieData)
  const sequelsAndPrequels = movies.sequelsAndPrequels.map((movie) => ({
    id: movie.id,
    name: movie.name,
    posterUrl: movie.poster.url,
    year: movie.year,
  }))

  return (
    <div className={classNames(cls.MovieSeason, {}, [className])}>
      <Text title="Сиквелы и приквелы" />
      <Carousel
        slides={sequelsAndPrequels.map((i) => (
          <MovieItem
            id={i.id}
            name={i.name}
            poster={i.posterUrl}
            year={`${i.year}`}
          />
        ))}
      />
    </div>
  )
}
