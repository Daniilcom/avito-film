export {
  SearchQuerySchema,
  SearchHistoryState,
} from './model/types/SearchHistorySchema'
export { searchHistoryReducer } from './model/slices/searchHistorySlice'
export {
  getSearchQueries,
  getLastSearchQuery,
} from './model/selectors/searchHistory'
