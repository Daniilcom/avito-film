import { classNames } from 'shared/lib/classNames/classNames'
import {
  memo,
  MutableRefObject,
  ReactNode,
  useRef,
  UIEvent,
  useEffect,
} from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import cls from './Page.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { scrollSaveActions } from 'features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getScrollSaveByPath } from 'features/ScrollSave/model/selectors/scrollSaveSelectors'
import { StateSchema } from 'app/providers/StoreProvaider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const location = useLocation()
  const dispatch = useAppDispatch()
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollSaveByPath(state, location.pathname)
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  }, [scrollPosition])

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: location.pathname,
      })
    )
  }, 500)

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
})
