import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './reducers/sidebarReducer'
import categoryPillReducer from './reducers/categoryPillReducer'
import pageSettingReducer from './reducers/pageSetting'

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    categoryPill: categoryPillReducer,
    pageSetting: pageSettingReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
