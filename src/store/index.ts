import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import authReducer from './authStore';
import { thunk } from 'redux-thunk';
import authMiddleware from "../middleware/authMiddleware";

const rootReducer=combineReducers({
    auth:authReducer
})
const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(thunk,authMiddleware),
})

export default store;