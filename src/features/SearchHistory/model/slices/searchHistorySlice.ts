import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchHistoryState, SearchQuery } from '../types/SearchHistorySchema'

const initialState: SearchHistoryState = {
  queries: [],
}

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    addSearchQuery(state, action: PayloadAction<string>) {
      const newQuery: SearchQuery = {
        query: action.payload,
        date: new Date(),
      }
      state.queries.unshift(newQuery)
      state.queries = state.queries.slice(0, 20)
    },
    removeSearchQuery(state, action: PayloadAction<string>) {
      state.queries = state.queries.filter((q) => q.query !== action.payload)
    },
  },
})

export const { addSearchQuery, removeSearchQuery } = searchHistorySlice.actions
export const { reducer: searchHistoryReducer, actions: searchHistoryActions } =
  searchHistorySlice
