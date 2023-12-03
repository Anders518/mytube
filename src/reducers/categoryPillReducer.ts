import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryPill: ''
}

const categoryPillSlice = createSlice({
  name: 'categoryPill',
  initialState,
  reducers: {
    setCategoryPill: (state, action) => {
      state.categoryPill = action.payload
    }
  }
})

export const { setCategoryPill } = categoryPillSlice.actions

export default categoryPillSlice.reducer
