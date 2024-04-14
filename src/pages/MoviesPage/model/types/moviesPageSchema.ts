import { EntityState } from '@reduxjs/toolkit'
import { MovieType } from 'entities/Movie'

export interface MoviesPageSchema extends EntityState<MovieType, number> {
  isLoading?: boolean
  error?: string
  page: number
  limit?: number
  sortYear: string
  sortAge: string
  sortCountry: string
  search: string

  _inited?: boolean
}
