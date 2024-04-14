import { useSelector } from 'react-redux'
import { Poster } from 'shared/ui/Poster'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { ConditionalRender } from 'shared/ui/ConditionalRender/ui/ConditionalRender'
import { classNames } from 'shared/lib/classNames/classNames'
import { Placeholder } from 'shared/ui/Placeholder/ui/Placeholder'
import cls from './MovieAbout.module.scss'
import { getMovieData } from '../../../model/selectors/movie'

export enum MovieAboutType {
  TV_SERIES = 'tv-series',
  MOVIE = 'movie',
}

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
      <ConditionalRender
        data={movie?.poster.url}
        Placeholder={
          <Placeholder
            text={`${movie?.alternativeName}`}
            className={cls.poster}
          />
        }
      >
        <Poster src={movie?.poster.url} className={cls.poster} />
      </ConditionalRender>
      <div className={cls.about}>
        <div>
          <ConditionalRender
            data={`${movie?.name}`}
            Text={
              <Text title={`${movie.alternativeName}`} className={cls.name} />
            }
          >
            <Text
              title={`${movie?.name}`}
              size={TextSize.M}
              className={cls.name}
            />
          </ConditionalRender>
          <ConditionalRender data={`${movie?.year}`} visible>
            <Text
              title={`(${movie?.year})`}
              size={TextSize.M}
              className={cls.name}
            />
          </ConditionalRender>
        </div>
        <div>
          <ConditionalRender data={`${movie?.alternativeName}`} visible>
            <Text
              text={`${movie?.alternativeName} `}
              size={TextSize.M}
              className={cls.subname}
            />
          </ConditionalRender>
          <ConditionalRender data={`${movie?.ageRating}`} visible>
            <Text
              text={`${movie?.ageRating}+`}
              size={TextSize.M}
              className={cls.subname}
            />
          </ConditionalRender>
        </div>
      </div>
      <div>
        <Text
          title="О фильме"
          text={`Рейтинг фильма: ${movie?.rating.kp} по версии Кинопоиска`}
          size={TextSize.M}
        />
        <ConditionalRender data={`${countries}`} visible>
          <Text text={`Страна: ${countries}`} size={TextSize.M} />
        </ConditionalRender>
        <ConditionalRender data={`${director.name}`} visible>
          <Text text={`Режиссёр: ${director.name}`} size={TextSize.M} />
        </ConditionalRender>
        <ConditionalRender data={movie?.slogan} visible>
          <Text text={`Слоган: "${movie?.slogan}"`} size={TextSize.M} />
        </ConditionalRender>
        <ConditionalRender data={movie?.movieLength} visible>
          <Text text={`Время: ${movie?.movieLength} мин.`} size={TextSize.M} />
        </ConditionalRender>
      </div>
    </div>
  )
}
