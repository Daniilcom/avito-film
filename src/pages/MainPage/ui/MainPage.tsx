import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
// import cls from './MainPage.module.scss'

interface MainPageProps {
  className?: string
}

const MainPage = ({ className }: MainPageProps) => {
  return <div>MainPage</div>
}

export default memo(MainPage)
