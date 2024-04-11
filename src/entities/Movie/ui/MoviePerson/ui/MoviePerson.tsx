import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Poster } from 'shared/ui/Poster'
import { Text, TextSize } from 'shared/ui/Text/Text'
import cls from './MovieAbout.module.scss'
import { getMovieData } from '../../../model/selectors/movie'

interface MovieAboutProps {
  className?: string
}

export const MovieAbout = (props: MovieAboutProps) => {
  const { className } = props
  const movie = useSelector(getMovieData)
  const countries = movie?.countries?.map((country) => country.name).join(', ')

  const director = movie?.persons?.find(
    (person) => person.profession === 'режиссеры'
  )
  return (
    <div className={classNames(cls.MovieAbout, {}, [className])}>
      <Poster src={movie?.poster.url} className={cls.poster} />
      <Text
        title={`${movie?.name} (${movie?.year})`}
        text={`${movie?.alternativeName} | ${movie?.ageRating}+`}
        size={TextSize.M}
        className={cls.name}
      />
      <div>
        <Text
          title="О фильме"
          text={`Рейтинг фильма: ${movie?.rating.kp} по версии Кинопоиска`}
          size={TextSize.M}
        />
        <Text text={`Страна: ${countries}`} size={TextSize.M} />
        <Text text={`Режиссёр: ${director.name}`} size={TextSize.M} />
        <Text text={`Слоган: "${movie?.slogan}"`} size={TextSize.M} />
        <Text text={`Время: ${movie?.movieLength} мин.`} size={TextSize.M} />
      </div>
    </div>
  )
}
