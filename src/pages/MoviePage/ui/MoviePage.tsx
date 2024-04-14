import { Movie } from 'entities/Movie'
import { memo, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Page } from 'widgetes/Page/Page'
import cls from './MoviePage.module.scss'

interface MoviePageProps {
  className?: string
}

const MoviePage = (props: MoviePageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const onBackToList = useCallback(() => {
    navigate('/')
  }, [navigate])

  if (!id) {
    return (
      <div className={classNames(cls.MoviePage, {}, [className])}>
        <Text title="Фильм не найден" />
      </div>
    )
  }
  return (
    <Page className={classNames(cls.MoviePage, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onBackToList}>
        <Text text="Назад к списку" />
      </Button>
      <Movie id={id} />
    </Page>
  )
}

export default memo(MoviePage)
