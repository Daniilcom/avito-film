import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { debounce } from 'shared/lib/debounce/debounce'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Carousel.module.scss'

interface CarouselProps {
  className?: string
  slides: React.ReactNode[]
  slidesPerPage?: number
}

export const Carousel = memo(
  ({ className, slides, slidesPerPage = 5 }: CarouselProps) => {
    const rootRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
      const handleScroll = debounce(() => {
        if (containerRef.current && rootRef.current) {
          const scrollLeft = containerRef.current.scrollLeft
          const clientWidth = rootRef.current.clientWidth
          const maxScrollLeft = containerRef.current.scrollWidth - clientWidth

          const lastIndex = Math.ceil(slides.length / slidesPerPage) - 1

          let newIndex
          if (scrollLeft >= maxScrollLeft) {
            newIndex = lastIndex
          } else {
            newIndex = Math.floor((scrollLeft + clientWidth / 2) / clientWidth)
          }

          setActiveSlide(newIndex)
        }
      }, 100)

      containerRef.current?.addEventListener('scroll', handleScroll)

      return () => {
        containerRef.current?.removeEventListener('scroll', handleScroll)
      }
    }, [slidesPerPage, slides.length])

    const goToSlide = useCallback((index: number) => {
      if (containerRef.current && rootRef.current) {
        const clientWidth = rootRef.current.clientWidth
        containerRef.current.scrollTo({
          left: clientWidth * index,
          behavior: 'smooth',
        })
      }
    }, [])

    return (
      <div ref={rootRef} className={classNames(cls.carousel, {}, [className])}>
        <div className={cls.wrapper}>
          <div ref={containerRef} className={cls.container}>
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{ width: `${100 / slidesPerPage}%` }}
                className={cls.slide}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
        {slides.length > slidesPerPage && (
          <div className={cls.pagination}>
            {Array.from(
              { length: Math.ceil(slides.length / slidesPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={classNames(cls.dot, {
                    [cls.active]: index === activeSlide,
                  })}
                />
              )
            )}
          </div>
        )}
      </div>
    )
  }
)
