import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ThemeType = 'light' | 'dark' | 'system' | undefined

interface PageSettingState {
  theme: ThemeType
}

const themeFromLocalStorage = localStorage.getItem('theme')
let theme: PageSettingState['theme'] = 'system'

if (
  themeFromLocalStorage === 'light' ||
  themeFromLocalStorage === 'dark' ||
  themeFromLocalStorage === 'system'
) {
  theme = themeFromLocalStorage
}

const initialState: PageSettingState = {
  theme: theme
}

const PageSetting = createSlice({
  name: 'PageSetting',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<PageSettingState['theme']>) => {
      return {
        ...state,
        theme: action.payload
      }
    }
  }
})

export const { setTheme } = PageSetting.actions

export default PageSetting.reducer
