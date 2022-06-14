import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    is_login:false,
    name:"",
    email:"",
  },
  reducers: {
    loadUser: (state, action) => {
        state.push(action.payload);
    }
  },
});
export const { loadUser } = userSlice.actions;

export default userSlice;
