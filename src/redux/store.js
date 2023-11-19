import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './features/propertySlice';
import currentUserReducer from './features/currentUserSlice';

const store = configureStore({
  reducer: {
    properties: propertyReducer,
    currentUser: currentUserReducer,
  },
});

export default store;
