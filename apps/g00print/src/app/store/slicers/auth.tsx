import { createSlice } from '@reduxjs/toolkit';


const initialAuthState = {
    token: null,
    userId: null,
    email: null,
    password: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setToken(state, action) {
            console.log(action.payload)
            state.token = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
