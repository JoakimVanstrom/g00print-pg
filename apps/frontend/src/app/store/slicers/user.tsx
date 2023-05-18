import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       setUser(state, action) {
            console.log(action.payload)
              state.user = action.payload;
         }

    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;