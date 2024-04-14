import { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './DropdownItem.module.scss'

interface DropdownItemProps {
  className?: string
  children: ReactNode
  onClick: () => void
}

export const DropdownItem = (props: DropdownItemProps) => {
  const { children, onClick, className } = props
  return (
    <li
      className={classNames(cls.DropdownItem, {}, [className])}
      onClick={onClick}
    >
      {children}
    </li>
  )
}
