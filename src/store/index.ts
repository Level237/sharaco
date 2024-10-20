import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import authReducer from './authStore';
import { thunk } from 'redux-thunk';
import authMiddleware from "../middleware/authMiddleware";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfigLocalStorage={
    key:'auth',
    storage,
    blacklist: ["somethingTemporary"],
}

const persistReducerAuth=persistReducer(persistConfigLocalStorage,authReducer)

const store=configureStore({
    reducer:{
        auth:persistReducerAuth
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }).concat(thunk,authMiddleware),
})

export const persistor=persistStore(store)
export default store;
