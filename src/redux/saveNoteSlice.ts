import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextAreaState {
  note: string;
  color: string;
  id: number;
}

const initialState: TextAreaState[] = [];

const saveNoteSlice = createSlice({
  name: 'save',
  initialState,
  reducers: {
    saveNote: (state, action: PayloadAction<TextAreaState>) => {
      state.push(action.payload);
    },
  },
});

export const { saveNote } = saveNoteSlice.actions;
export default saveNoteSlice.reducer;
