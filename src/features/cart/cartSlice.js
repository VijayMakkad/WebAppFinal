import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (cartItem, { rejectWithValue }) => {
    try {
      // const token = getCookie('authToken');
      // console.log('token: ',{token});
      const response = await axios.post(
        'http://127.0.0.1:8000/api/cart/add',
        cartItem,
        {
          headers: {
            "Content-Type":"application/json",
          },
          withCredentials: true,
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
