import { createSlice } from "@reduxjs/toolkit";



const UsersData = [];


const userSlice = createSlice({
  name: "Users",
  initialState:{value:UsersData},
  reducers: {
    userAdded(state, action) {
      state.value.push(action.payload);
    },
    deleteUser:(state,action)=>{
        state.value = state.value.filter((user)=> user.id !== action.payload.id)
    }
    } 
  },
);

export const {userAdded,deleteUser} = userSlice.actions

export default userSlice.reducer;