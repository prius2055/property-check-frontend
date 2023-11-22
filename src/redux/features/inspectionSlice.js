import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://[::1]:3000//api/v1/inspections';

export const getInspections = createAsyncThunk('get/inspection', async () => {
  const authToken = localStorage.getItem('token');
  const response = await axios.get(url, {
    headers: {
      'content-type': 'application/json',
      authorization: authToken,
    },
  });

  const inspections = await response.data;
  return inspections;
});

export const addInspection = createAsyncThunk(
  'add/inspection',
  async (inspectionDetail) => {
    const authToken = localStorage.getItem('token');
    const response = await axios.post(
      url,
      { inspection: inspectionDetail },
      {
        headers: {
          'content-type': 'application/json',
          authorization: authToken,
        },
      }
    );

    const inspection = await response.data;
    return inspection;
  }
);

const initialState = {
  inspectionData: '',
  isLoading: false,
  loadingError: false,
};

const inspectionSlice = createSlice({
  name: 'inspections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInspections.pending, (state) => {
        state.isLoading = true;
        state.loadingError = false;
      })
      .addCase(getInspections.fulfilled, (state, { payload }) => {
        state.inspectionData = payload;
        state.isLoading = false;
        state.loadingError = false;
      })
      .addCase(getInspections.rejected, (state) => {
        state.loadingError = true;
        state.isLoading = false;
      });
  },
});

export default inspectionSlice.reducer;
