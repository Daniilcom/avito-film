export type SearchQuery = {
  query: string
  date: Date
}

export interface SearchHistoryState {
  queries: SearchQuery[]
}

export type SearchQuerySchema = Record<string, SearchQuery[]>

export interface UserSearchHistorySchema {
  [userId: string]: SearchQuery[]
}
