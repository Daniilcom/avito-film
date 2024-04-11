import { Movie } from 'entities/Movie'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import cls from './MoviePage.module.scss'

interface MoviePageProps {
  className?: string
}

const MoviePage = (props: MoviePageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(cls.MoviePage, {}, [className])}>
        <Text title="Фильм не найден" />
      </div>
    )
  }
  return (
    <div className={classNames(cls.MoviePage, {}, [className])}>
      <Movie id={id} />
    </div>
  )
}

export default memo(MoviePage)
