import { apiSlice } from "@/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';

export const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authSlice
    },
    middleware:getDefaultMiddleware=>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})