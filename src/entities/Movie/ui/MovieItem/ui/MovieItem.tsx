import { HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from '../ui/MovieItem.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Card } from 'shared/ui/Card'
import { AppImage } from 'shared/ui/AppImage'
import { AppLink } from 'shared/ui/AppLink/AppLink'

export interface MovieProps {
  id: number
  name?: string
  year?: string
  poster?: string
}

export interface MovieItemProps extends MovieProps {
  className?: string
  target?: HTMLAttributeAnchorTarget
}

export const MovieItem = memo((props: MovieItemProps) => {
  const { className, target, id, name, year, poster } = props

  return (
    <AppLink
      target={target}
      to={`/movie/${id}`}
      className={classNames(cls.MovieItem, {}, [className])}
    >
      <Card className={cls.card}>
        <AppImage alt={name} src={poster} className={cls.img} />
        <Text title={name} className={cls.name} />
        <Text text={`${year}`} className={cls.date} />
      </Card>
    </AppLink>
  )
})
