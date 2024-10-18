import { configureStore, } from '@reduxjs/toolkit';
import authReducer from './authStore';
import { thunk } from 'redux-thunk';

const store=configureStore({
    reducer:authReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(thunk),
    
})

export default store;