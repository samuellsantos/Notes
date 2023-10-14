import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  color: string;
  BigNote: boolean;
}
const initialState: AppState = {
  color: '',
  BigNote: false
}

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addBigNote: (state, action: PayloadAction<string>) => {
      state.color = action.payload
      state.BigNote = true
    }
  }
})

export const {addBigNote} = slice.actions

export default slice.reducer
