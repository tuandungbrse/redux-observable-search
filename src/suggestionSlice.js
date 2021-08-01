import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  suggestions: []
}

const slice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    search: (state, action) => {
      state.suggestions.length = 0
      state.suggestions.push(action.payload)
    }
  }
})

export const { search } = slice.actions

export default slice.reducer
