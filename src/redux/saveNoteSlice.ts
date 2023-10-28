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
    removeNote: (state, action: PayloadAction<number>) => {
      const notes = state.filter((item) => item.id !== action.payload);
      return notes
    }
  },
});

export const { saveNote, removeNote } = saveNoteSlice.actions;
export default saveNoteSlice.reducer;
