import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './features/propertySlice';
import usersReducer from './features/usersSlice';
import inspectionReducer from './features/inspectionSlice';

const store = configureStore({
  reducer: {
    properties: propertyReducer,
    users: usersReducer,
    inspections: inspectionReducer,
  },
});

export default store;
