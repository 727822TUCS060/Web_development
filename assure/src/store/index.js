import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Ensure this is the correct path

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
