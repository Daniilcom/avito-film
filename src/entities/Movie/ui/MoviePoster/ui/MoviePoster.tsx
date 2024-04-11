import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MoviePoster.module.scss'

interface MoviePosterProps {
  className?: string
}

export const MoviePoster = ({ className }: MoviePosterProps) => {
  return (
    <div className={classNames(cls.MoviePoster, {}, [className])}>
      <img />
    </div>
  )
}
