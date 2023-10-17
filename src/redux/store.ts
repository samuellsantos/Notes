import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Importe o reducer, não a ação
import saveNoteSlice from './saveNoteSlice';

const store = configureStore({
  reducer: {
    app: userReducer, 
    save: saveNoteSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store
