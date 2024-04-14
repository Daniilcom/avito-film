import { Carousel } from 'shared/ui/Carousel'
import { Text } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import { MovieItem } from '../../MovieItem'
import cls from './MovieCarousel.module.scss'

export interface MovieCarouselProps {
  className?: string
  title: string
  items: Array<{
    id: number
    name: string
    poster?: string
    photo?: string
    year?: string
  }>
}

export const MovieCarousel = (props: MovieCarouselProps) => {
  const { className, title, items } = props
  return (
    <div className={classNames(cls.MovieCarousel, {}, [className])}>
      <Text title={title} />
      <Carousel
        slides={items.map((item) => (
          <MovieItem
            id={item.id}
            name={item.name}
            poster={item.poster}
            photo={item.photo}
            year={item.year}
          />
        ))}
      />
    </div>
  )
}
