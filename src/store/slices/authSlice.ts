import { createSlice } from '@reduxjs/toolkit';

interface authSliceState {
  isAuth: boolean;
}

const initialState: authSliceState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;
