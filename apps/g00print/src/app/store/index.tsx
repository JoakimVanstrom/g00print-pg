import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slicers/auth";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});


export default store;