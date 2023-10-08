import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Notes',
  initialState: [
    {
      note: 'teste',
      color: 'bg-red-500'
    }
  ],
  reducers: {
    addNote(state, { payload }) {
      return {...state, note: payload}
    }
  }
})

export const {addNote} = slice.actions

export default slice.reducer

export const selectTest = state => state.user