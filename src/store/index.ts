
import { configureStore } from "@reduxjs/toolkit";
import { authService } from "@/services/auth";
import { userService } from "@/services/users";
import authSlice from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { quoteService } from "@/services/quotes";
import quoteSlice from "./quoteSlice";
import { clientService } from "@/services/client";
import { designationSlice } from "./DesignationSlice";





export const store=
  configureStore({
    reducer:{

        [authService.reducerPath]:authService.reducer,
        [authSlice.reducerPath]:authSlice.reducer,
        [userService.reducerPath]:userService.reducer,
        [quoteService.reducerPath]:quoteService.reducer,
        [clientService.reducerPath]:clientService.reducer,
        [quoteSlice.reducerPath]:quoteSlice.reducer,
        [designationSlice.reducerPath]:designationSlice.reducer
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authService.middleware)
    .concat(userService.middleware)
    .concat(quoteService.middleware)
    .concat(clientService.middleware)
    ,
    devTools:true,

})
setupListeners(store.dispatch);