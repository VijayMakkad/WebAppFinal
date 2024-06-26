import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { json } from 'react-router-dom';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (cartItem, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/cart/add',
        cartItem,
        {
          withcredentials: true,
          headers : { "Content-Type": "application/json"}
          
          // headers: {
          //   Authorization: 'Bearer 116|lScHupUH0tFlZE1CnjqnPaiAbPcH6UQLHS5ThykD',
          // },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
