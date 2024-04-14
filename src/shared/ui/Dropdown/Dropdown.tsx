import { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Dropdown.module.scss'

interface DropdownProps {
  className?: string
  children: ReactNode
  visible?: boolean
}

export const Dropdown = (props: DropdownProps) => {
  const { children, visible, className } = props
  if (!visible) return null
  return (
    <ul className={classNames(cls.Dropdown, {}, [className])}>{children}</ul>
  )
}
