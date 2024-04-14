import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'widgetes/Page/Page'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
  <Page className={classNames(cls.notFoundPage, {}, [className])}>
    Страница не найдена
  </Page>
)
