import { StateSchema } from 'app/providers/StoreProvaider'

export const getSearchQueries = (state: StateSchema) =>
  state.searchHistory.queries
export const getLastSearchQuery = (state: StateSchema) =>
  state.searchHistory.queries[0] ?? null
export const getTotalSearchQueries = (state: StateSchema) =>
  state.searchHistory.queries.length
export const getSearchQueryByIndex = (state: StateSchema, index: number) =>
  state.searchHistory.queries[index] ?? null
export const includesSearchQuery = (state: StateSchema, query: string) =>
  state.searchHistory.queries.some((search) => search.query === query)
