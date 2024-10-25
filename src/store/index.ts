
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { authService } from "@/services/auth";


const persistConfig = { key: "auth", storage, version: 1 };
const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const persistedReducer = persistReducer(persistConfig, authService.reducer);

export const store=configureStore({
    reducer:{
        [authService.reducerPath]:persistedReducer,
        auth:authSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authService.middleware),
    devTools:true,
})

export const persistor=persistStore(store)