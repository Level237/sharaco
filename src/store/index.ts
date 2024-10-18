import { configureStore, } from '@reduxjs/toolkit';
import authReducer from './authStore';
import { thunk } from 'redux-thunk';
import authMiddleware from '@/middleware/authMiddleware';

const store=configureStore({
    reducer:authReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(thunk,authMiddleware),
    
})

export default store;