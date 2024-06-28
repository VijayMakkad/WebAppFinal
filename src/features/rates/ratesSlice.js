import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRates = createAsyncThunk('rates/fetchRates', async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/current-rates');
  return response.data;
});

const ratesSlice = createSlice({
  name: 'rates',
  initialState: {
    goldRate: null,
    silverRate: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.goldRate = action.payload.gold_rate;
        state.silverRate = action.payload.silver_rate;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ratesSlice.reducer;
