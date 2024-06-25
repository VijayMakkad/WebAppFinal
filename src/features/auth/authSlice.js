import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../utils/apiHandler'

// Initial state for the auth slice
const initialState = {
  user: null,
  status: 'idle',
  error: null,
  message:null
};


export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
    console.log('loggin in', credentials)
    const data = {...credentials,device_token:'123456'}
    const response = await api.post('/login', data);
    if (response.statusText==='OK') {
        return {...response.data, phone: credentials.phone};
    } else {
        throw new Error(response || 'Failed to login');
    }
});


export const signupUser = createAsyncThunk('auth/signupUser', async (credentials) => {
    console.log('signin up', credentials)
    const response = await api.post('/register', credentials)
    if (response.statusText==='OK') {
        return {...response.data, phone: credentials.phone};
    } else {
        throw new Error(response || 'Failed to login');
    }
});

export const verifyOTP = createAsyncThunk('auth/verifyOTP', async (data, { getState }) => {
    console.log('otp', data)

  const response = await api.post('/verify/otp', data,
    {
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    } )
    if (response.statusText==='OK') {
        return response.data;
    } else {
        throw new Error(response || 'Failed to login');
    }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
        state.user = null;
        state.status = 'idle';
        state.error = null;
        state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.message = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.message = null;
        state.error = action.error.message;
      })
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
        state.message = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.message = null;
        state.error = action.error.message;
      })
      .addCase(verifyOTP.pending,(state) => {
        state.status = 'loading';
        state.message = null;
      })
      .addCase(verifyOTP.fulfilled,(state,action) => {
        state.status = 'successful';
        state.user = action.payload.user;
        state.message = null;
        state.error = null;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.status = 'failed';
        state.message = null;
        state.error = action.error.message;
      });
  },
});

export const { logout} = authSlice.actions;

export default authSlice.reducer;