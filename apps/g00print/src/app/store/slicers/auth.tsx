import { createSlice } from '@reduxjs/toolkit';


const initialAuthState = {
    token: null,
    isLoggedIn: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
        }

    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
