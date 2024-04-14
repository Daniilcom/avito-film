import { MovieType } from './movie';

export interface MovieSchema {
  isLoading: boolean
  error?: string
  data?: MovieType
}
