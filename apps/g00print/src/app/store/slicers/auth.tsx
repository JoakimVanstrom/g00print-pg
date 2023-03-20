import { createSlice } from '@reduxjs/toolkit';


const initialAuthState = {
    token: null,
    userId: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
