import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProperties = createAsyncThunk('get/properties', async () => {
  const authToken = localStorage.getItem('token');
  const response = await axios.get('http://[::1]:3000/api/v1/properties', {
    headers: {
      'content-type': 'application/json',
      authorization: authToken,
    },
  });
  const properties = response.data;
  return properties;
});

export const addProperty = createAsyncThunk(
  'add/property',
  async (propertyDetail) => {
    const authToken = localStorage.getItem('token');
    const response = await axios.post(
      'http://[::1]:3000/api/v1/properties',
      { property: propertyDetail },
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      }
    );
    const property = await response.data;
    return property;
   
  }
);

const initialState = {
  propertyData: '',
  isLoading: false,
  loadingError: false,
};

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProperties.pending, (state) => {
        state.isLoading = true;
        state.loadingError = false;
      })
      .addCase(getProperties.fulfilled, (state, { payload }) => {
        state.propertyData = payload;
        state.isLoading = false;
        state.loadingError = false;
      })
      .addCase(getProperties.rejected, (state) => {
        state.loadingError = true;
        state.isLoading = false;
      });
  },
});

export default propertySlice.reducer;
