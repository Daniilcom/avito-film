import { StoreProvider } from './ui/StoreProvaider'
import { createReduxStore, AppDispatch } from './config/store'
import type { StateSchema, ThunkConfig } from './config/StateSchema'

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  AppDispatch,
  ThunkConfig,
}
