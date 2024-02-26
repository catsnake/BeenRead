import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload))
    },
    logout: (state, action) => {
      state.userData = null;

      // localStorage.removeItem('userData');
      //remove cart in local storage
      localStorage.clear();
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer