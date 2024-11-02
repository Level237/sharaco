
import { configureStore } from "@reduxjs/toolkit";
import { authService } from "@/services/auth";
import { userService } from "@/services/users";
import authSlice from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { quoteService } from "@/services/quotes";
import quoteSlice from "./quoteSlice";





export const store=
  configureStore({
    reducer:{

        [authService.reducerPath]:authService.reducer,
        [authSlice.reducerPath]:authSlice.reducer,
        [userService.reducerPath]:userService.reducer,
        [quoteService.reducerPath]:quoteService.reducer,
        [quoteSlice.reducerPath]:quoteSlice.reducer
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authService.middleware)
    .concat(userService.middleware)
    .concat(quoteService.middleware)
    ,
    devTools:true,

})
setupListeners(store.dispatch);