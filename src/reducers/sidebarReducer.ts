import { createSlice } from '@reduxjs/toolkit'

const SCREEN_TYPE = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}
const isScreenLarge = () => {
  return window.innerWidth > SCREEN_TYPE.md
}

interface SidebarState {
  sidebarState: 'largeOpen' | 'smallOpen' | 'close'
  screenSize: number
}
const initialState: SidebarState = {
  sidebarState: 'close',
  screenSize: window.innerWidth
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      if (isScreenLarge()) {
        return {
          ...state,
          sidebarState: state.sidebarState === 'close' ? 'largeOpen' : 'close'
        }
      }
      return {
        ...state,
        sidebarState: state.sidebarState === 'close' ? 'smallOpen' : 'close'
      }
    },
    closeSidebar(state) {
      return {
        ...state,
        sidebarState: 'close'
      }
    }
  }
})

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer
