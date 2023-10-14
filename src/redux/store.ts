import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Importe o reducer, não a ação

const store = configureStore({
  reducer: {
    app: userReducer, // Use o reducer aqui
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store
