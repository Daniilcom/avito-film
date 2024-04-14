import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { Card } from 'shared/ui/Card/Card'
import { AppImage } from 'shared/ui/AppImage/AppImage'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { MovieType } from 'entities/Movie/model/types/movie'
import cls from './MovieItem.module.scss'

export interface MovieItemProps {
  movie?: MovieType
  id?: number
  name?: string
  year?: string | undefined
  poster?: string
  photo?: string
  className?: string
  target?: HTMLAttributeAnchorTarget
}

export const MovieItem = memo((props: MovieItemProps) => {
  const { className, target, id, name, year, poster, photo, movie } = props

  const isMovie = !!year && !!poster
  const isPerson = !!photo && !year

  const content = (
    <Card className={cls.card}>
      <AppImage
        alt={name}
        src={isPerson ? photo : poster}
        className={cls.img}
      />
      <div className={cls.name}>
        <Text title={name} size={TextSize.S} />
        {isMovie && year !== 'undefined' && (
          <Text text={`${year} `} className={cls.date} />
        )}
      </div>
    </Card>
  )

  if (isMovie) {
    return (
      <AppLink
        target={target}
        to={`/movie/${id}`}
        className={classNames(cls.MovieItem, {}, [className])}
      >
        {content}
      </AppLink>
    )
  }

  return (
    <div className={classNames(cls.MovieItem, {}, [className])}>{content}</div>
  )
})
