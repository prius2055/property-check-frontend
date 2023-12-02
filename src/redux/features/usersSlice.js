import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllUsers = createAsyncThunk('get/getAllUsers', async () => {
  const authToken = localStorage.getItem('token');
  const response = await axios.get('https://propcheck-api.onrender.com/api/v1/users', {
    headers: {
      'content-type': 'application/json',
      authorization: authToken,
    },
  });
  const allUsers = await response.data;
  return allUsers;
});


export const getCurrentUser = createAsyncThunk('get/currentUser', async () => {
  const authToken = localStorage.getItem('token');
  const response = await axios.get(
    'https://propcheck-api.onrender.com/current_user',
    {
      headers: {
        'content-type': 'application/json',
        authorization: authToken,
      },
    }
  );
  const currentUser = await response.data;
  return currentUser;
});

const initialState = {
  currentUserData: '',
  allUsersData: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.allUsersData = payload;
    });

    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.currentUserData = payload;
    });
  },
});

export default usersSlice.reducer;
