import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, signOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null, _id: null },
  token: null,
  isAuth: false,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(signOut.fulfilled, state => {
        state.user = { name: null, email: null, _id: null };
        state.token = null;
        state.isAuth = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isAuth = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.token = null;
      }),
});

export const authReducer = authSlice.reducer;