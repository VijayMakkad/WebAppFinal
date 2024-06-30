import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../utils/apiHandler'
import Cookies from 'js-cookie'

// Initial state for the auth slice
const initialState = {
  user: null,
  status: 'idle',
  error: null,
  message: null,
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials) => {
    console.log('logging in', credentials)
    const data = { ...credentials, device_token: '123456' }
    const response = await api.post('/login', data)
    if (response.statusText === 'OK') {
      // Set the token in a cookie
      Cookies.set('authToken', response.data.token)
      return { ...response.data, phone: credentials.phone }
    } else {
      throw new Error(response || 'Failed to login')
    }
  }
)

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (credentials) => {
    console.log('signing up', credentials)
    const response = await api.post('/register', credentials)
    if (response.statusText === 'OK') {
      // Set the token in a cookie
      Cookies.set('authToken', response.data.token)
      return { ...response.data, phone: credentials.phone }
    } else {
      throw new Error(response || 'Failed to signup')
    }
  }
)

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async (data, { getState }) => {
    console.log('otp', data)
    const response = await api.post('/verify/otp', data)
    if (response.statusText === 'OK') {
      return response.data
    } else {
      throw new Error(response || 'Failed to verify OTP')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null
      state.status = 'idle'
      state.error = null
      state.message = null
      // Remove the token from cookies
      Cookies.remove('authToken')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
        state.message = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload.user
        state.message = null
        state.error = null
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.message = null
        state.error = action.error.message
      })
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading'
        state.message = null
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload.user
        state.message = action.payload
        state.error = null
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed'
        state.message = null
        state.error = action.error.message
      })
      .addCase(verifyOTP.pending, (state) => {
        state.status = 'loading'
        state.message = null
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.status = 'successful'
        state.user = action.payload.user
        state.message = null
        state.error = null
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.status = 'failed'
        state.message = null
        state.error = action.error.message
      })
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer

// Selector to get auth token from cookies
export const selectAuthToken = () => Cookies.get('authToken')
