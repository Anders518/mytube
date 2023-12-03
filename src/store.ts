import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './reducers/sidebarReducer'
import categoryPillReducer from './reducers/categoryPillReducer'

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    categoryPill: categoryPillReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
