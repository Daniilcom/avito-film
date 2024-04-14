import { memo, useMemo } from 'react'
import { keyAge, keyCountry, keyYear } from 'shared/const/sortKey'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import cls from './MoviesSort.module.scss'

interface MoviesSortProps {
  className?: string
  sortYear: string
  sortAge: string
  sortCountry: string
  onChangeYear: (newYear: string) => void
  onChangeAge: (newAge: string) => void
  onChangeCountry: (newCountry: string) => void
}

export const MoviesSort = memo((props: MoviesSortProps) => {
  const {
    className,
    onChangeYear,
    onChangeAge,
    onChangeCountry,
    sortYear,
    sortAge,
    sortCountry,
  } = props
  const sortFieldOptionsYear = useMemo<SelectOption[]>(
    () => [{ value: '', content: 'Выберите год' }, ...keyYear],
    []
  )

  const sortFieldOptionsCountry = useMemo<SelectOption[]>(
    () => [{ value: '', content: 'Выберите страну' }, ...keyCountry],
    []
  )

  const sortFieldOptionsAge = useMemo<SelectOption[]>(
    () => [{ value: '', content: 'Выберите возраст' }, ...keyAge],
    []
  )

  return (
    <div className={classNames(cls.MoviesSort, {}, [className])}>
      <Select
        options={sortFieldOptionsCountry}
        value={sortCountry}
        onChange={(val) => onChangeCountry(val)}
        label="Сортировать"
      />
      <Select
        options={sortFieldOptionsYear}
        value={String(sortYear)}
        onChange={(val) => onChangeYear(val)}
      />
      <Select
        options={sortFieldOptionsAge}
        value={String(sortAge)}
        onChange={(val) => onChangeAge(val)}
      />
    </div>
  )
})
