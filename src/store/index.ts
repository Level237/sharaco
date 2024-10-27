
import { configureStore } from "@reduxjs/toolkit";
import { authService } from "@/services/auth";
import { userService } from "@/services/users";
import authSlice from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";





export const store=
  configureStore({
    reducer:{

        [authService.reducerPath]:authService.reducer,
        [authSlice.reducerPath]:authSlice.reducer,
        [userService.reducerPath]:userService.reducer
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authService.middleware,userService.middleware),
    devTools:true,

})
setupListeners(store.dispatch);