import { configureStore } from '@reduxjs/toolkit';
import { addNote } from './userSlice';

export default configureStore({
  reducer: {
    user: addNote
  },
});
