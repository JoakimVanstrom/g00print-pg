import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slicers/auth";
import userReducer from "./slicers/user";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    }
});


export default store;