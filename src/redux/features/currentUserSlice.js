import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrentUser = createAsyncThunk('get/currentUser', async () => {
  const authToken = localStorage.getItem('token');
  const response = await axios.get('http://[::1]:3000/current_user', {
    headers: {
      'content-type': 'application/json',
      authorization: authToken,
    },
  });
  const currentUser = await response.data;
  return currentUser
});

const initialState = {
  currentUserData: '',
  error: false,
};

const currentUserSlice = createSlice({
  name: 'currentUserData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.currentUserData = payload;
      state.error = false;
    });
    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
      state.currentUserData = '';
      state.error = true;
    });
  },
});

export default currentUserSlice.reducer;
